import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/blog/Nav';
import Home from './containers/Home';
import Blog from './containers/Blog';
import BlogDetail from './containers/BlogDetail';
import Contact from './containers/Contact';
import Error404 from './components/Error404';

import { Provider } from 'react-redux';
import store from './store';

export default function App() {
	return (
		<Provider store={store}>
			<Router>
				<Nav />

				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="contact" element={<Contact />} />
					<Route path="blog" element={<Blog />} />
					<Route path="blog/:id" element={<BlogDetail />} />
					<Route exact path="*" element={<Error404 />} />
				</Routes>
			</Router>
		</Provider>
	);
}
