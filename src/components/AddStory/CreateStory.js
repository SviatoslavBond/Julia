import React, { useState } from 'react'
import axios from 'axios';
import { v4 as uid } from 'uuid';
import EditPreviewer from 'components/EditPreviewer/EditPreviewer';
import SelectCity from 'components/EditPreviewer/SelectCity';
import Calendar from 'components/Calendar/Calendar';
import './createStory.scss';



const storyCat = [
	{
		value: 'wedding',
		label: 'Wedding'
	},
	{
		value: 'lovestory',
		label: 'Love story'
	},
	{
		value: 'family',
		label: 'Family'
	},
	{
		value: 'content',
		label: 'Content'
	}
]
const AddStory = () => {
	const [storyName, setNameOfStory] = useState('vlad&alina');
	const [idFolder, setIdFolder] = useState(uid(4).slice(0, 4));
	const [files, setFiles] = useState();
	const [category, setCategory] = useState('wedding');
	const [location, setLocation] = useState('');
	const [photo, setPhoto] = useState([]);
	const [date, setDate] = useState('');


	const handleUploadsImages = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const files = e.target.files;
		const images = new FormData();
		images.append('foldername', `${storyName}-${idFolder}`);
		images.append('categoryfolder', category);
		// console.log(files);
		for (let i = 0; i < files.length; i++) {
			images.append('photos', files[i])
		}

		axios.post(`${process.env.REACT_APP_API_URL}/upload`, images, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
			.then(({ data }) => {

				setPhoto(data.map((el, i) => {
					return {
						id: uid(4),
						cover: i === 0 ? true : false,
						path: `${process.env.REACT_APP_API_URL}/${el}`
					}
				}))

			})
			.catch(err => console.log(err))

	}

	const getFullDate = (date) => {
		const year = date.getFullYear();
		const day = date.getDate();
		const month = date.toLocaleString('en-US', { month: 'long' })
		setDate(`${day} ${month} ${year}`)


	}

	const sendToServer = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const data = {
			storyName,
			files,
			category,
			location
		}

	}

	return (
		<div className='newStory'>
			<div className='container'>
				<div className='newStory__wrap'>
					<Calendar getFullDate={getFullDate} />
					<div className='field field__story'>
						<p className='newStory__title'>Назва історії</p>
						<input
							className='newStory__input'
							placeholder='Назва історії'
							onChange={(e) => setNameOfStory(e.target.value)}
							value={storyName} type="text" name="nameOfStory" />
					</div>
					<div className='field field__story'>
						<p className='newStory__title'>Локация</p>
						{/* <input
							placeholder='Локація'
							className='newStory__input'
							onChange={(e) => setLocation(e.target.value)} type="text" name="location" /> */}
						<SelectCity />
					</div>

					<div className='field field__story'>
						<p className='newStory__title'>Виберіть категорію зйомки</p>
						<select className='newStory__select' onChange={(e) => setCategory(e.target.value)}>
							{
								storyCat.map((cat, i) => (
									<option key={i} value={cat.value}>{cat.label}</option>
								))
							}
						</select>
					</div>
					<div className='field field__story'>
						<p className='newStory__title'>Виберіть файли зображень</p>
						<input onChange={handleUploadsImages} type='file' disabled={storyName ? false : true} name='images' multiple="multiple" />
					</div>

					<div className='field field__story'>
						{/* <button disabled={files && storyName ? false : true} onClick={sendToServer}>Send to server</button> */}
					</div>
					<div className='uploading-photos-list' >
						<EditPreviewer images={photo} />
					</div>
				</div>

			</div>

		</div>
	)
}

export default AddStory