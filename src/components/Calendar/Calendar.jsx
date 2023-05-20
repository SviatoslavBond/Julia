import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { getArrayFromYears, getMonthsInYear, getDaysOfWeek } from './helpers';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import './calendar.scss'

const Calendar = ({ startYear = 2018, getFullDate, open, parent, setShowCalendar }) => {
	const [date, setDate] = useState(new Date());
	const [month, setMonth] = useState(date.getMonth());
	const [year, setYear] = useState(date.getFullYear());
	const years = getArrayFromYears(startYear, 2035);
	const months = getMonthsInYear();
	const weekdays = getDaysOfWeek('en-US');

	useEffect(() => {
		if (parent && setShowCalendar) {
			const handleCloseMenu = (event) => {
				if (!parent.current.contains(event.target)) {
					setShowCalendar(false)
				}
			}
			document.addEventListener('click', handleCloseMenu)
			return () => {
				document.removeEventListener('click', handleCloseMenu)
			}
		}
	})

	const nextMonth = () => {
		if (month < 11) {
			setMonth(month + 1)
			setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
		} else {
			setMonth(0)
			setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
		}
		if (date.getMonth() === 11) {
			setYear(year + 1)
		}
	};

	const prevMonth = () => {
		if (month > 0) {
			setMonth(month - 1)
			setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
		} else {
			setMonth(11)
			setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
		}
		if (date.getMonth() === 0) {
			setYear(year - 1)
		}
	};

	const handleChoseDate = (e) => {
		const day = e.target.getAttribute('data-day');
		const year = e.target.getAttribute('data-year');
		const date = new Date(year, e.target.getAttribute('data-month'), day);
		getFullDate(date)
	}

	const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;

	const calendarRows = [];
	let daysInWeek = 0;
	let calendarDay = 1;

	while (calendarDay <= daysInMonth) {
		const calendarRow = [];

		for (let i = 0; i < 7; i++) {
			if (daysInWeek < firstDayOfMonth || calendarDay > daysInMonth) {
				calendarRow.push(<td className='calendar__day' key={i}></td>);
			} else {
				calendarRow.push(
					<td
						data-year={year}
						data-day={calendarDay}
						data-month={month}
						onClick={handleChoseDate}
						className={
							clsx('calendar__day',
								'calendar__day--is',
								{
									'calendar__day--vocation': i === 5 || i === 6,
								})
						}
						key={i}>
						{calendarDay}
					</td>);
				calendarDay++;
			}
			daysInWeek++;
		}
		calendarRows.push(<tr key={calendarDay}>{calendarRow}</tr>);
	}

	return (
		<div
			className={clsx('calendar', { 'calendar__show': !open })}>
			<div className="calendar__inner">
				<div className='calendar__nav'>
					<div className='calendar__label'>
						{months[month]}
						<select
							value={month}
							onChange={(e) => {
								setMonth(Number(e.target.value))
								setDate(new Date(year, e.target.value, 1))
							}}
							className='calendar__select-month'>
							{
								months.map((month, i) => {
									return <option value={i} key={i}>{month}</option>
								})
							}
						</select>
					</div>
					<div className='calendar__label'>
						{year}
						<select
							defaultValue={year}
							onChange={(e) => {
								setYear(Number(e.target.value))
								setDate(new Date(e.target.value, month, 1))
							}}
							className='calendar__select-year'>
							{
								years.map((year, i) => {
									return <option value={year} key={i}>{year}</option>
								})
							}
						</select>
					</div>

					<div className='calendar__btn calendar__btn--prev' onClick={prevMonth}>
						<BsFillArrowLeftCircleFill />
					</div>
					<div className='calendar__btn calendar__btn--next'>
						<BsFillArrowRightCircleFill onClick={nextMonth} />
					</div>

				</div>

				<table>
					<thead>
						<tr>
							{weekdays.map((day, i) => (
								<th className='calendar__th' key={i}>
									<abbr title={day.title}>{day.lable}</abbr>
								</th>
							))}
						</tr>
					</thead>
					<tbody>{calendarRows}</tbody>
				</table>
			</div>
		</div>
	);
}

export default Calendar;