import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { v4 as uid } from 'uuid';
import { useValid } from 'hooks/validation.hooks';
import EditPreviewer from 'components/EditPreviewer/EditPreviewer';
import SelectCity from 'components/SelectCity/SelectCity';
import Calendar from 'components/Calendar/Calendar';
import { BsCalendar3Event } from 'react-icons/bs'
import { storyCat } from './data';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import DropZone from './DropZone/DropZone';
import './createStory.scss';
import { Card, Popover, Box, Modal, CircularProgress, DialogContent, Button } from '@mui/material';
import { useNavigate, useLocation } from "react-router-dom";
import { Success } from 'components/SuccessMessage/Success';
import { orange } from '@mui/material/colors';

const AddStory = () => {
	const [describe, setDescribe] = useState('');
	const [category, setCategory] = useState('wedding');
	const [photo, setPhoto] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [sendData, setSendData] = useState(false);
	const idFolder = useRef();
	const navigate = useNavigate();

	// const loc = useLocation();
	// const storyDateRef = useRef();
	// console.log(loc);
	// const LS = localStorage;

	const {
		setFormValid,
		blurHandler,
		setToInitialStateOfForm,
		changeHandler,
		setError,
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
		formValid,
		error,
	} = useValid();

	// useEffect(() => {

	// 	storyDateRef.current = {
	// 		storyName, location, title, describe, date, category, photo
	// 	}
	// 	LS.setItem('story', JSON.stringify(storyDateRef.current));
	// 	if(sendData){
	// 		LS.setItem('story',JSON.stringify({}));
	// 	}
	// }, [storyName, location, title, describe, date, category, photo])


	useEffect(() => {
		if (error) {
			navigate('/admin/add-story/error');
		}
	}, [error]);
	useEffect(() => {
		idFolder.current = uid().slice(0, 4);
	}, [sendData]);



	useEffect(() => {
		if (errorName || errorLocation || errorDate || photo.length === 0 || errorTitle) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [errorName, errorLocation, errorDate, errorTitle, photo])

	const handleClose = () => {
		setAnchorEl(null);
	};
	const openPop = Boolean(anchorEl);
	const getFullDate = (date) => {
		const year = date.getFullYear();
		const day = date.getDate();
		const month = date.toLocaleString('en-US', { month: 'long' });
		changeHandler({ target: { value: `${day} ${month} ${year}`, name: 'date' } });
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
				title,
				date
			}
			await axios.post(`${process.env.REACT_APP_API_URL}/story`, fields);
			setSendData(true);
			setLoaded(true);
			setSendData(false);
			setToInitialStateOfForm();
			setDescribe('');
			setPhoto([]);
			setTimeout(() => { setLoaded(false) }, 5000);
		} catch (error) {
			setError(true)
		}
	}

	return (
		<Box  >
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
							<SelectCity
								name={'city'}
								clear={loaded}
								changeHandler={changeHandler}
								blurHandler={blurHandler} />
							<ErrorMessage isDirty={locationDirty} isError={errorLocation} />
						</div>

						<div className='newStory__slot date' >
							<div className='newStory__slot-title date__slot-title'>
								<p className='newStory__title'>Дата съемки</p>
							</div>

							<div
								className='date__field'
								onClick={(e) => setAnchorEl(e.currentTarget)} >
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

							<Popover
								open={openPop}
								onClose={handleClose}
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'center',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'center',
								}}
							>
								<Calendar onClose={handleClose} getFullDate={getFullDate} />
							</Popover>

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
							storyName={`${storyName}-${idFolder.current}`}
							errorName={false} />
						<Box display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ marginBottom: 2 }}>
							<Button
								variant='contained'
								sx={{ marginRight: 2 }}
								color='warning'
								disabled={!formValid}
								type='submit'	>
								Сохранить историю
							</Button>
							{
								sendData && formValid
									? <CircularProgress size={30} sx={{ color: orange[400] }} />
									: null
							}
						</Box>
						<EditPreviewer images={photo} setPhoto={setPhoto} />
					</Card>
				</div>
			</form >
			<Modal
				onClose={() => setLoaded(false)}
				open={loaded}
			>
				<DialogContent>
					<Success close={() => setLoaded(false)} />
				</DialogContent>
			</Modal>

		</Box>
	)
}

export default AddStory