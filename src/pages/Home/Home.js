import React from 'react'
import Header from '../../components/Header/Header';
import Gallery from '../../components/Gallery/Gallery';
import About from '../../components/About/About';
import Calculator from '../../components/Calculator/Calculator';
import styles from './Home.module.scss'
const Home = () => {

	return (
		<>
			<Header />
			<Gallery />
			<About />
			<Calculator />
		</>
	)
}

export default Home