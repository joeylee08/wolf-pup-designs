import { useNavigate } from "react-router-dom";

const Error = () => {
	const navigate = useNavigate();

	setTimeout(() => navigate("/"), 800);

	return (
		<div className="mainPage">
			<div className="errorBox">
				<h1>Whoops... redirecting you back.</h1>
			</div>
		</div>
	);
};

export default Error;
