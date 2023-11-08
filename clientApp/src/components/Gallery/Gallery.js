import React from 'react';
import PhotoItem from './PhotoItem/PhotoItem';

import './Gallery.scss';

const Gallery = ({ images }) => {


	return (
		<div className='gallery'>
			<div className='container'>
				<div className="gallery__inner">
					{
						images.map((url, i) => {
							return (
								<PhotoItem key={i} url={url} />
							)
						})
					}
				</div>
			</div>
		</div>

	)
}

export default Gallery