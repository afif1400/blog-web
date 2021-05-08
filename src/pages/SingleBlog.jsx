import React from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, makeStyles } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import '../styles/singleblog.css';
import RightSideBar from '../components/Sidebar/RightSideBar';

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

	const { slug } = useParams();
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					suscipit consequatur quis excepturi ducimus architecto at voluptates,
					quisquam exercitationem iure facere porro harum assumenda, sequi
					laudantium placeat tempore, officia corporis? Soluta, exercitationem
					voluptas ut eum fugit nisi delectus ratione, mollitia similique quae
					ab deleniti? Reprehenderit dolor deleniti maiores voluptatibus, dicta
					animi ipsum. Labore incidunt porro eaque praesentium at voluptas
					voluptate illum, deserunt nisi possimus hic saepe quam ullam ipsa
					sequi. Aperiam mollitia autem officia voluptas consequatur quia
					doloremque ipsum ad eveniet doloribus aliquam optio unde, fuga totam
					impedit cupiditate non ab enim inventore et nesciunt? Libero animi
					labore cumque possimus autem suscipit quasi laudantium necessitatibus
					quisquam doloribus, nihil delectus officia nobis dolores in
					consequatur eius minima voluptate veniam voluptatem quam facere totam
					eveniet. Voluptatem voluptate vero sequi libero earum, eos, delectus
					repudiandae vel, facilis corporis doloremque eius incidunt aut soluta
					similique ipsa? Recusandae voluptas ipsum reiciendis modi hic totam
					neque, minima cumque voluptatum, facilis laboriosam earum unde eius
					odit exercitationem quaerat tempora suscipit. Voluptatem eos numquam
					consequatur tenetur officiis doloribus dolore eius assumenda
					reiciendis veritatis fugit impedit cupiditate alias optio sit, dolorem
					laborum id? Amet deserunt, quae, nihil, facere esse quisquam nam
					laboriosam optio corrupti nemo dolor iste sunt? Repellat.
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
					praesentium ea sint tempore illum itaque. Hic odio animi quae totam
					consequatur officiis velit facilis nobis fuga cum assumenda impedit
					aliquam nemo ducimus quis accusamus, saepe earum facere? Dolorum
					consectetur unde nemo, totam at, ab laudantium odit quidem ipsa a
					molestias qui natus architecto reprehenderit, nulla iure officiis
					voluptatibus corrupti. Nostrum corrupti fugiat dolor culpa architecto,
					commodi recusandae libero quaerat consequuntur voluptatum non in nihil
					ipsam molestiae reprehenderit nulla sit facere porro harum laudantium
					exercitationem provident omnis consequatur. Exercitationem ad,
					voluptates, accusantium enim officiis excepturi rem rerum at, eaque
					molestias fuga.
				</div>
				<div className='right_side_bar'>
					<RightSideBar />
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
