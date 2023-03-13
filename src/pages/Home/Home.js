import React from 'react'
import Header from '../../components/Header/Header';
import Gallery from '../../components/Gallery/Gallery';
import About from '../../components/About/About';
import styles from './Home.module.scss'
const Home = () => {

	return (
		<>
			<Header />
			<Gallery />
			<About />
		</>
	)
}

export default Home