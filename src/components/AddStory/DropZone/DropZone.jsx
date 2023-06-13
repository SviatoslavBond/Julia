import React, { useRef, useState } from 'react'
import { v4 as uid } from 'uuid';
import clsx from 'clsx';
import './drop-zone.scss'
import axios from 'axios';
import LinearWithValueLabel from 'components/UI/LinearProgressWithLabel/LinearWithValueLabel';
import { Button } from '@mui/material';

const DropZone = ({ photo, setPhoto, storyName, category, errorName }) => {
	const [uploadsDirty, setUploadsDirty] = useState(false);
	const [drag, setDrag] = useState(false);
	const [errorUpload, setErrorUpload] = useState(false);
	const [progressUpload, setProgressUpload] = useState(0);
	const inputRef = useRef();
	const handleUploadsImages = (e) => {
		e.preventDefault();
		const files = e.type === 'change' ? e.target.files : e.dataTransfer.files;
		const images = new FormData();
		images.append('foldername', `${storyName}`);
		images.append('categoryfolder', category);
		for (let i = 0; i < files.length; i++) {
			images.append('photos', files[i])
		}
		axios.post(`${process.env.REACT_APP_API_URL}/upload`, images, {
			headers: {
				'Content-Type': 'multipart/form-data'
			},
			onUploadProgress: function (progressEvent) {
				let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
				setProgressUpload(percentCompleted);
			}

		})
			.then(({ data }) => {
				setErrorUpload(false);
				setProgressUpload(0);
				const paths = data.map((el, i) => {
					return {
						cover: i === 0 ? true : false,
						path: `${process.env.REACT_APP_API_URL}/${el}`,
						URI: el,
						id: uid()
					}
				})
				if (!uploadsDirty) {
					setPhoto(paths);
				} else {
					setPhoto([...paths, ...photo])
				}
				setUploadsDirty(true);
				setDrag(false);
			})
			.catch(err => {
				setErrorUpload(true);
			})

	}
	return (
		<div className='drop'>
			<div
				onDragOver={(e) => {
					e.preventDefault()
					setDrag(true)
				}}
				onDragLeave={(e) => {
					e.preventDefault()
					setDrag(false)
				}}
				onDrop={handleUploadsImages}
				className={clsx('drop__inner', { 'drop__inner--active': drag })}>
				<div className='drop__text'>
					{
						errorUpload
							? <p>Произошла ошибка при загрузке фото попробуйте позже </p>
							: photo.length === 0
								? <p>Перетащите фотографии в это поле или выберите их нажав эту кнопочку</p>
								: <p>Вы загрузили <b>{photo.length}</b>  фото: еще можно <b>{150 - photo.length}</b></p>
					}
				</div>
				<div className='button__upload'>
					<input
						ref={inputRef}
						id='uploads'
						onChange={handleUploadsImages}
						type='file'
						disabled={!errorName && storyName.length > 5 ? false : true}
						name='images'
						multiple="multiple" />
					<Button
						disabled={!errorName && storyName.length > 5 ? false : true}
						type='button'
						variant='contained'
						onClick={() => inputRef.current.click()}
						sx={{}}>
						Обзор
					</Button>
				</div>
				{
					progressUpload
						? <LinearWithValueLabel className='drop__progressBar'
							value={progressUpload} />
						: null
				}

			</div>

		</div >
	)
}

export default DropZone