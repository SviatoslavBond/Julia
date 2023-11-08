import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import Gallery from 'components/Gallery/Gallery';
import About from 'components/About/About';
import Calculator from 'components/Calculator/Calculator';
import Instagram from 'components/InstaPreviewer/Instagram';
import { getPathsImages } from 'utils/getPathsImage';

import './Home.scss'

const images = require.context('../../assets/homeGallery', false, /\.(jpe?g|webp)$/);



const Home = () => {
	const isAdmin = true
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true
	});
	const [imagePaths, setImagePath] = useState([]);

	useEffect(() => {
		setImagePath(getPathsImages(images));
	}, [])

	return (
		<div className='home'>
			{
				isAdmin ? (<div className="home__admin">
					<Link to='/admin' href='/contacts'>
						Admin
					</Link>
				</div>) : null
			}
			<Header />
			<Gallery images={imagePaths} />
			<About />
			<Calculator observe={ref} />
			{
				inView ? <Instagram /> : null
			}
		</div>
	)
}

export default Home