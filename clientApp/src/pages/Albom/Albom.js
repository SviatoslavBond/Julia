import React, { useContext, useEffect, useState } from 'react'
import Header from 'components/Header/Header';
import { useParams } from 'react-router-dom';
import Gallery from 'components/Gallery/Gallery';

const Albom = () => {




	useEffect(() => {

		// setImages(targetItem.paths)
	}, [])


	return (
		<div className='albom'>
			<Header />
			<div className="container">
				{/* <p>Albom id {id} {category} </p> */}
				{/* <Gallery images={images} /> */}
			</div>
		</div>
	)
}

export default Albom