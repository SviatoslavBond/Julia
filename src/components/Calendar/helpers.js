export const getArrayFromYears = (start, end) => {
	const arrOfYears = []
	for (let i = start; i <= end; i++) {
		arrOfYears.push(i)
	};
	return arrOfYears;
}

export const getMonthsInYear = (local = 'en-US') => {
	const month = []
	for (let i = 0; i < 12; i++) {
		month.push(new Date(2000, i).toLocaleString(local, { month: 'long' }))
	}
	return month;
}


export const getDaysOfWeek = (local) => {
	const daysOfWeek = []
	const date = new Date();
	const formatShortDay = new Intl.DateTimeFormat(local, { weekday: 'short' });
	const formatLongDay = new Intl.DateTimeFormat(local, { weekday: 'long' });
	for (let i = 2; i < 9; i++) {
		date.setDate(i + 1);
		daysOfWeek.push({
			lable: formatShortDay.format(date),
			title: formatLongDay.format(date)
		});
	}
	return daysOfWeek;
}


