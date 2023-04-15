import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Weddings from 'pages/Weddings/Weddings';
import LoveStory from 'pages/LoveStory/LoveStory';
import Family from 'pages/Family/Family';
import Albom from 'pages/Albom/Albom';
import Admin from 'pages/AdminPanel/Admin';
import AddStory from 'components/AddStory/CreateStory';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { storiesContext } from 'services/galleryData/galleryData';
import { storiesData } from 'services/galleryData/galleryData';



function App() {
	useEffect(() => {
		AOS.init({
			duration: 1200,
			offset: 50
		});
	}, [])

	return (
		<storiesContext.Provider value={storiesData} >
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/weddings' element={<Weddings />} />
					<Route path='/lovestory' element={<LoveStory />} />
					<Route path='/family' element={<Family />} />
					<Route path='/story/:id/:category' element={<Albom />} />
					<Route path='/admin/*' element={<Admin />}>
						<Route path='add-story' element={<AddStory />} />
					</Route>

				</Routes>
			</BrowserRouter>
		</storiesContext.Provider>


	);
}

export default App;
