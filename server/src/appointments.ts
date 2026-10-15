import { DateTime } from "luxon";

const appointmentTimes = [
	{ id: "M1", hour: 9, minute: 0 },
	{ id: "M2", hour: 9, minute: 45 },

	{ id: "A1", hour: 14, minute: 0 },
	{ id: "A2", hour: 14, minute: 45 },

	{ id: "E1", hour: 19, minute: 0 },
	{ id: "E2", hour: 19, minute: 45 },
];

const TIMEZONE = "America/Los_Angeles";

function generateAppointmentSlots(requireNotice = true) {
	const now = DateTime.now().setZone(TIMEZONE);
	const earliest = requireNotice ? now.plus({ hours: 24 }) : now;
	const end = now.plus({ hours: 24, days: 5 }).endOf("day");

	const slots = [];

	for (let day = earliest; day < end; day = day.plus({ days: 1 })) {
		// Luxon: Monday = 1, Sunday = 7
		if (day.weekday > 5) continue;

		for (const time of appointmentTimes) {
			const slot = day.set({
				hour: time.hour,
				minute: time.minute,
				second: 0,
				millisecond: 0,
			});

			if (slot < earliest || slot >= end) continue;

			slots.push({
				id: `${slot.toISODate()}-${time.id}`,
				label: `${slot.toFormat("ccc, LLL d")} at ${slot.toFormat("h:mm a")}`,
			});
		}
	}

	return slots;
}

export { appointmentTimes, generateAppointmentSlots };
