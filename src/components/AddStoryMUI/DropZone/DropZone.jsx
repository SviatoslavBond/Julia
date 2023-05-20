import React from 'react'
import { v4 as uid } from 'uuid';
import './drop-zone.scss'
import axios from 'axios';

const DropZone = ({ setPhoto, storyName, category, errorName }) => {
	const idFolder = uid().slice(0, 4);

	const handleUploadsImages = (e) => {
		e.preventDefault();
		const files = e.target.files;
		const images = new FormData();
		images.append('foldername', `${storyName}-${idFolder}`);
		images.append('categoryfolder', category);
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
						position: i,
						cover: i === 0 ? true : false,
						path: `${process.env.REACT_APP_API_URL}/${el}`,
						URI: el
					}
				}))

			})
			.catch(err => console.log(err))
	}
	return (
		<div className='uploader'>
			<div className='newStory__slot'>
				<div className='newStory__slot-title'>
					<p className='newStory__title'>Выберите фото</p>
				</div>
				<input
					id='images'
					onChange={handleUploadsImages}
					type='file'
					disabled={!errorName ? false : true}
					name='images'
					multiple="multiple" />
			</div>
		</div>
	)
}

export default DropZone