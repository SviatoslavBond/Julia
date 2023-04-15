export const getArrayFromYears = (start, current) => {
	const arrOfYears = []
	for (let i = start; i <= current; i++) {
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