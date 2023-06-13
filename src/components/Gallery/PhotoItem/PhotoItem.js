
import React from 'react'
import { useInView } from 'react-intersection-observer';
const PhotoItem = ({ url }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2
	})


	return (
		<div ref={ref} className='gallery__item'
			data-aos='zoom-in' data-aos-duration="500">
			{
				inView ? <img src={url} alt='foto in Paris' /> :
					<div
						data-aos='zoom-in' data-aos-duration="300"
						className='gallery__skeleton'></div>
			}

		</div>
	)
}

export default PhotoItem