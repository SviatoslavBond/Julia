import {
	GridContextProvider,
	GridDropZone,
	GridItem,
	swap
} from "react-grid-dnd";
import { useState, useEffect } from 'react';
import PreviewItem from "components/EditPreviewer/PreviewItem/PreviewItem";
import axios from "axios";
import './editPreviewer.scss';


const EditPreviewer = ({ images, countColumn = 5, heightRow = 150, setPhoto }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		if (images) {
			setItems(images);
		}
	}, [images]);

	const setCoverImage = (id) => {
		setItems(items.map(el => el.id === id ? { ...el, cover: true } : {
			...el,
			cover: false
		}))
	}
	const deleteImage = (path, id) => {

		axios.delete(`${process.env.REACT_APP_API_URL}/deleteImage`, { data: { path } })
			.then(() => {
				setItems(items.filter(el => el.id !== id))
				setPhoto(items.filter(el => el.id !== id))
			})
			.catch((err) => {
				console.log(err);
				console.log('Uploading the image finished with error');
			})
	}

	const onChange = (__, sourceIndex, targetIndex,) => {
		const nextState = swap(items, sourceIndex, targetIndex);
		setItems(nextState);
		setPhoto(nextState)
	}
	return (
		<div className='up-list'>

			<GridContextProvider
				onChange={onChange}>
				<GridDropZone
					className="dropzone "
					id="photos"
					boxesPerRow={countColumn}
					rowHeight={heightRow}
					style={{ height: heightRow * Math.ceil(items.length / countColumn) }}
				>
					{
						items.map(foto => {
							return (<GridItem
								className="grid-item"
								key={foto.id}>
								<PreviewItem foto={foto} deleteImage={deleteImage} setCoverImage={setCoverImage} />
							</GridItem>)
						})
					}
				</GridDropZone>
			</GridContextProvider>
		</div>
	)
}

export default EditPreviewer;