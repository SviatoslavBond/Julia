import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import { v4 as uid } from 'uuid';
import clsx from 'clsx';
import { useValid } from 'hooks/validation.hooks';
import EditPreviewer from 'components/EditPreviewer/EditPreviewer';
import SelectCity from 'components/SelectCity/SelectCity';
import Calendar from 'components/Calendar/Calendar';
import { BsCalendar3Event } from 'react-icons/bs'
import { storyCat } from './data';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import DropZone from './DropZone/DropZone';
import './createStory.scss';
import { useRef } from 'react';
import { Card } from '@mui/material';

const AddStory = () => {
	const [describe, setDescribe] = useState('');
	const [category, setCategory] = useState('wedding');
	const [photo, setPhoto] = useState([]);
	const [showCalendar, setShowCalendar] = useState(false);
	const dateRef = useRef(null);

	const {
		setFormValid,
		blurHandler,
		setToInitialStateOfForm,
		changeHandler,
		storyName,
		location,
		date,
		title,
		titleDirty,
		storyNameDirty,
		locationDirty,
		dateDirty,
		errorName,
		errorLocation,
		errorDate,
		errorTitle,
		formValid } = useValid();



	useEffect(() => {
		if (errorName || errorLocation || errorDate || photo.length === 0 || errorTitle) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [errorName, errorLocation, errorDate, errorTitle, photo])

	const getFullDate = (date) => {
		const year = date.getFullYear();
		const day = date.getDate();
		const month = date.toLocaleString('en-US', { month: 'long' });
		changeHandler({ target: { value: `${day} ${month} ${year}`, name: 'date' } });
		setShowCalendar(false);
	}

	const sendToServer = async (e) => {
		e.preventDefault();
		try {
			const fields = {
				storyName,
				photo,
				category,
				location,
				describe,
				title
			}
			await axios.post(`${process.env.REACT_APP_API_URL}/story`, fields)
			setToInitialStateOfForm()
			setDescribe('');
			setPhoto([]);
		} catch (error) {
			console.log(error);
		}
	}

	const idFolder = useMemo(() => {
		return uid().slice(0, 4)
	}, [storyName])

	return (
		<form
			onSubmit={sendToServer}
			className='newStory'
			method='POST'>
			<div className='container'>
				<Card sx={{ pb: '10px' }}>
					<div className='newStory__main-title'>
						<h3>Загружаем историю</h3>
					</div>
					<div className='newStory__slot story-name'>
						<div className='newStory__slot-title'>
							<p className=' newStory__title'>Как зовут пару/модель/семъю</p>
						</div>
						<input
							name='name'
							className='newStory__input'
							placeholder='Как зовут пару/модель/семъю'
							onChange={changeHandler}
							onBlur={blurHandler}
							value={storyName} type="text" />
						<ErrorMessage isDirty={storyNameDirty} isError={errorName} />
					</div>

					<div className='newStory__slot story-name'>
						<div className='newStory__slot-title'>
							<p className=' newStory__title'>Заголовок</p>
						</div>
						<input
							name='title'
							className='newStory__input'
							placeholder='Заголовок'
							onChange={changeHandler}
							onBlur={blurHandler}
							value={title} type="text" />
						<ErrorMessage isDirty={titleDirty} isError={errorTitle} />
					</div>

					<div className='newStory__slot story-describe'>
						<div className='newStory__slot-title'>
							<p className=' newStory__title'>Описание</p>
						</div>
						<input
							className='newStory__input'
							placeholder='Описание'
							onChange={(e) => setDescribe(e.target.value)}
							value={describe} type="text" name="describe" />
					</div>

					<div className='newStory__slot location'>
						<div className='newStory__slot-title'>
							<p className='newStory__title'>Локация</p>
						</div>
						<SelectCity name={'city'} changeHandler={changeHandler} blurHandler={blurHandler} />
						<ErrorMessage isDirty={locationDirty} isError={errorLocation} />
					</div>

					<div className='newStory__slot date' ref={dateRef}>
						<div className='newStory__slot-title date__slot-title'>
							<p className='newStory__title'>Дата съемки</p>
						</div>

						<div
							className='date__field'
							onClick={() => setShowCalendar(!showCalendar)} >
							<span>{date ? date : "Выбрать"}</span>
							<div className='date__icon'>
								<BsCalendar3Event />
							</div>
							<input
								id='date__hidden-input'
								name='date'
								type="text"
								onBlur={blurHandler}
							/>

						</div>
						{
							<Calendar
								setShowCalendar={setShowCalendar}
								parent={dateRef}
								open={showCalendar}
								getFullDate={getFullDate} />
						}
						<ErrorMessage isDirty={dateDirty} isError={errorDate} />
					</div>

					<div className='newStory__slot'>
						<div className='category'>
							<div className='newStory__slot-title category__slot-title'>
								<p className='newStory__title'>Вид съемки</p>
							</div>
							<select className='category__select' onChange={(e) => setCategory(e.target.value)}>
								{
									storyCat.map((cat, i) => (
										<option key={i} value={cat.value}>{cat.label}</option>
									))
								}
							</select>
						</div>
					</div>
					<DropZone
						photo={photo}
						setPhoto={setPhoto}
						category={category}
						storyName={`${storyName}-${idFolder}`}
						errorName={false}
					/>
					<div className='newStory__slot  '>
						<button
							className={'newStory__btn'}
							disabled={!formValid}
							type='submit'	>
							Сохранить историю
						</button>
					</div>
					<div className='uploading-photos-list' >
						<EditPreviewer images={photo} setPhoto={setPhoto} />
					</div>
				</Card>
			</div>
		</form >
	)
}

export default AddStory