import {
	GridContextProvider,
	GridDropZone,
	GridItem,
	swap
} from "react-grid-dnd";
import { useState, useEffect } from 'react';
// import img1 from 'assets/homeGallery/1.webp';
// import img2 from 'assets/homeGallery/2.webp';
// import img3 from 'assets/homeGallery/3.webp';
// import img4 from 'assets/homeGallery/4.webp';
// import img5 from 'assets/homeGallery/5.webp';
// import img6 from 'assets/homeGallery/6.webp';
// import img7 from 'assets/homeGallery/7.webp';
// import img8 from 'assets/homeGallery/8.webp';
import PreviewItem from "components/EditPreviewer/PreviewItem/PreviewItem";
import './editPreviewer.scss'

// const images = [
// 	{
// 		path: img1,
// 		id: 0,
// 		cover: true
// 	},
// 	{
// 		path: img2,
// 		id: 1,
// 		cover: false
// 	},
// 	{
// 		path: img3,
// 		id: 2,
// 		cover: false
// 	},
// 	{
// 		path: img4,
// 		id: 3,
// 		cover: false
// 	},
// 	{
// 		path: img5,
// 		id: 4,
// 		cover: false
// 	},
// 	{
// 		path: img6,
// 		id: 5,
// 		cover: false
// 	},
// 	{
// 		path: img7,
// 		id: 6,
// 		cover: false
// 	},
// 	{
// 		path: img8,
// 		id: 7,
// 		cover: false
// 	},
// ]

const EditPreviewer = ({ images, countColumn = 5, heightRow = 150 }) => {
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
	const deleteImage = (id) => {
		setItems(items.filter(el => el.id !== id))
	}

	const onChange = (__, sourceIndex, targetIndex,) => {
		const nextState = swap(items, sourceIndex, targetIndex);
		setItems(nextState)
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
								<PreviewItem images={images} foto={foto} deleteImage={deleteImage} setCoverImage={setCoverImage} />
							</GridItem>)
						})
					}
				</GridDropZone>
			</GridContextProvider>
		</div>
	)
}

export default EditPreviewer;