import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Quote from './containers/Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route exact path='/' element={<App />} />
			<Route path='/quote' element={<Quote />} />
		</Routes>
	</BrowserRouter>,
);
