import React from 'react';
import './Gallery.scss'
const images = require.context('../../assets/homeGallery', false, /\.(png|jpe?g|svg|webp)$/);
const imageList = images.keys().sort((a, b) => {
	const regex = /(\d+)/;
	const numA = +a.match(regex)[1];
	const numB = +b.match(regex)[1];
	return numA - numB;
}).map(path => images(path));

const Gallery = () => {

	return (

		<div className='gallery'>
			<div className='container'>
				<div className="gallery__inner">
					{
						imageList.map((url, i) => {
							return (
								<div className='gallery__item' data-aos='zoom-in' data-aos-duration="500" key={i}>
									<img src={url} alt='foto in Paris' />
								</div>
							)
						})
					}
				</div>

			</div>

		</div>

	)
}

export default Gallery