import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Weddings from 'pages/Weddings/Weddings';
import LoveStory from 'pages/LoveStory/LoveStory';
import Family from 'pages/Family/Family';
import Albom from 'pages/Albom/Albom';
import Admin from 'pages/AdminPanel/Admin';
import AOS from 'aos';
import Error from 'components/ErrorPage/Error';
import 'aos/dist/aos.css';
import { Navigate } from 'react-router-dom';



function App() {
	useEffect(() => {
		AOS.init({
			duration: 1200,
			offset: 50
		});
	}, [])

	return (

		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/weddings' element={<Weddings />} />
				<Route path='/lovestory' element={<LoveStory />} />
				<Route path='/family' element={<Family />} />
				<Route path='/story/:id/:category' element={<Albom />} />
				<Route path='/admin/*' element={<Admin />} />
				<Route path="/404" element={<Error />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</BrowserRouter>



	);
}

export default App;
