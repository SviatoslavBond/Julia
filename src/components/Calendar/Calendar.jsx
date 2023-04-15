import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { getArrayFromYears, getMonthsInYear } from './helpers';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import './calendar.scss'

const weekdays = [
	{
		title: 'понедельник',
		label: 'Пн'
	},
	{
		title: 'вторник',
		label: 'Вт'
	},
	{
		title: 'среда',
		label: 'Ср'
	},
	{
		title: 'четверг',
		label: 'Чт'
	},
	{
		title: 'пятница',
		label: 'Пт'
	},
	{
		title: 'субота',
		label: 'Сб'
	},
	{
		title: 'воскресенье',
		label: 'Вс'
	},
];

const Calendar = ({ startYear = 2018, getFullDate }) => {
	const [date, setDate] = useState(new Date());
	const [month, setMonth] = useState(date.getMonth());
	const [year, setYear] = useState(date.getFullYear());
	const years = getArrayFromYears(startYear, 2035);
	const months = getMonthsInYear();

	const nextMonth = () => {
		if (month < 11) {
			setMonth(month + 1)
			setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
			console.log(date);
		} else {
			setMonth(0)
			setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
			console.log(date);
		}
		if (date.getMonth() === 11) {
			setYear(year + 1)
		}
	};

	const prevMonth = () => {
		if (month > 0) {
			setMonth(month - 1)
			setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
			console.log(date);
		} else {
			setMonth(11)
			setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
			console.log(date);
		}
		if (date.getMonth() === 0) {
			setYear(year - 1)
		}
	};


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
						onClick={(e) => {
							const day = e.target.getAttribute('data-day');
							const year = e.target.getAttribute('data-year');
							const date = new Date(year, e.target.getAttribute('data-month'), day);
							getFullDate(date)
						}}
						className={
							clsx('calendar__day',
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
		<div className='calendar'>
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
							{weekdays.map((day) => (
								<th className='calendar__th' key={day.title}>
									<abbr title={day.title}>{day.label}</abbr>
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