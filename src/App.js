import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1200,
			offset: 50
		});
	}, [])

	return (
		<BrowserRouter>
			<div className="container">
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>

	);
}

export default App;
