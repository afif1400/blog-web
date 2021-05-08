import React from 'react';
import HomePage from './pages/Home';
import NavBar from './components/Navbar/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogPage from './pages/SingleBlog';

export default function MainComponent(props) {
	return (
		<>
			<Router>
				<NavBar />
				<Route exact path='/' component={HomePage} />
				<Route exact path='/blogs/:slug' component={BlogPage} />
			</Router>
		</>
	);
}
