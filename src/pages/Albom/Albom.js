import React, { useContext, useEffect, useState } from 'react'
import Header from 'components/Header/Header';
import { useParams } from 'react-router-dom';
import Gallery from 'components/Gallery/Gallery';
import { storiesContext } from 'services/galleryData/galleryData';
const Albom = () => {
	const { id, category } = useParams();
	const [images, setImages] = useState([]);
	const IMAGES = useContext(storiesContext);


	useEffect(() => {
		const items = IMAGES[category];

		console.log(items.filter((obj) => console.log(obj)
		));
		console.log(id);
		console.log(category);

		// setImages(targetItem.paths)
	}, [])


	return (
		<div className='albom'>
			<Header />
			<div className="container">
				{/* <p>Albom id {id} {category} </p> */}
				<Gallery images={images} />
			</div>
		</div>
	)
}

export default Albom