
import "dotenv/config";

type EmailOptions = {
	to: string;
	subject: string;
	text: string;
    html?: boolean;
};

export async function sendZohoEmail({ to, subject, text, html = false }: EmailOptions) {
	const clientId = process.env.ZOHO_CLIENT_ID;
	const clientSecret = process.env.ZOHO_CLIENT_SECRET;
	const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
	const accountId = process.env.ZOHO_ACCOUNT_ID;
	const accountsUrl = process.env.ZOHO_ACCOUNTS_URL || "https://accounts.zoho.com";

	if (!clientId || !clientSecret || !refreshToken || !accountId) {
		throw new Error("Missing Zoho email configuration.");
	}

	const tokenResponse = await fetch(`${accountsUrl}/oauth/v2/token`, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			client_id: clientId,
			client_secret: clientSecret,
			refresh_token: refreshToken
		}),
		signal: AbortSignal.timeout(10000)
	});

	if (!tokenResponse.ok) {
		throw new Error(`Zoho token refresh failed: ${tokenResponse.status}`);
	}

	const tokenData = await tokenResponse.json() as {
		access_token?: string;
	};

	if (!tokenData.access_token) {
		throw new Error("Zoho did not return an access token.");
	}

	const mailResponse = await fetch(
		`https://mail.zoho.com/api/accounts/${accountId}/messages`,
		{
			method: "POST",
			headers: {
				Authorization: `Zoho-oauthtoken ${tokenData.access_token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				fromAddress: "info@wolfpupdesigns.org",
				toAddress: to,
				subject,
				content: text,
				mailFormat: html ? "html" : "plaintext"
			}),
			signal: AbortSignal.timeout(15000)
		}
	);

	const result = await mailResponse.json();

	if (!mailResponse.ok || result.status?.code !== 200) {
		throw new Error(`Zoho email failed: ${JSON.stringify(result)}`);
	}

	return result;
}
