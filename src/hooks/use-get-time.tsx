import { useEffect, useState } from "react";

function useGetTime() {
	const [time, setTime] = useState(new Date());

	const years = time.getFullYear();
	const months = time.getMonth();
	const days = time.getDay() + 1;

	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	useEffect(() => {
		const tick = () => {
			setTime(new Date());
		};

		const timerID = setInterval(() => tick(), 1000);

		return () => {
			clearInterval(timerID);
		};
	}, []);

	return {
		years,
		months,
		days,
		hours,
		minutes,
		seconds,
	};
}

export default useGetTime;
