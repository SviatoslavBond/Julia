import React from 'react';
import styles from './Gallery.module.scss'
const images = require.context('../../assets/homeGallery', false, /\.(png|jpe?g|svg|webp)$/);
const imageList = images.keys().sort((a, b) => {
	const regex = /(\d+)/;
	const numA = +a.match(regex)[1];
	const numB = +b.match(regex)[1];
	return numA - numB;
}).map(path => images(path));

const Gallery = () => {

	return (

		<div className={styles.gallery}>
			{
				imageList.map((url, i) => {
					return (
						<div data-aos='zoom-in' data-aos-duration="500" key={i}>
							<img src={url} alt='foto in Paris' />
						</div>
					)
				})
			}
		</div>

	)
}

export default Gallery