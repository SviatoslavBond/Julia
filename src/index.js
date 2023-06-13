import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'redux/store';
import './style/index.scss';
import App from './App';
import { theme, ThemeProvider } from './theme'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>

);





