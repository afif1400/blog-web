import React from 'react';
// import { useParams } from 'react-router-dom';
import { Avatar, makeStyles } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import '../styles/singleblog.css';
import RightSideBar from '../components/Sidebar/RightSideBar';
import Markdown from '../components/Markdown/Markdown';

const useStyles = makeStyles((theme) => ({
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

const BlogPage = () => {
	const classes = useStyles();

	// const { slug } = useParams();
	return (
		<div className='blogpage'>
			<Card className='bg-dark text-white'>
				<Card.Img
					variant='top'
					src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
				/>
				<Card.ImgOverlay className='card-img-overlay-single'>
					<div className='overlaytext'>
						<Card.Title>
							Your Most Burning Questions About Light Lamp
						</Card.Title>
						<Card.Text>
							<Avatar className={classes.small}></Avatar>
							Author name &ensp; . &ensp;Last updated 3 mins ago
						</Card.Text>
					</div>
				</Card.ImgOverlay>
			</Card>
			<div className='blog singleblog'>
				<div className='blog_card'>
					<Markdown />
				</div>
				<div className='right_side_bar'>
					<RightSideBar />
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
