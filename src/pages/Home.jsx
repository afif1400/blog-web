import React from 'react';
import Hero from '../components/Hero';
import RightSideBar from '../components/Sidebar/RightSideBar';
import Blog from '../components/Blog/Blog';
import '../styles/home.css';

const HomePage = () => {
	return (
		<div className='Home'>
			<Hero />
			<div className='blog'>
				<div className='blog_card'>
					<Blog />
				</div>
				<div className='right_side_bar'>
					<RightSideBar />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
