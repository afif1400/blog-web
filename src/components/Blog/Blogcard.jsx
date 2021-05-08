import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Avatar, Chip } from '@material-ui/core';
import '../../styles/blogcard.css';

const BlogCard = ({ mainImage, slug, title, abstract }) => {
	return (
		<div className='blogcard'>
			<Card>
				<Link to={'/blogs/' + slug.current}>
					<Card.Img
						variant='top'
						src={mainImage.asset.url}
						alt={mainImage.alt}
					/>
				</Link>
				{/* <Card.ImgOverlay style={{ zIndex: '0' }}>
					<Chip
						label='category'
						color='primary'
						style={{
							background: 'linear-gradient(270deg, #FFA387 0%, #FE4F70 100%)',
						}}
					></Chip>
				</Card.ImgOverlay> */}
				<Card.Header>
					<Avatar
						style={{ marginRight: '10px' }}
						alt='RemySharp'
						src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Favatarideas%2Ffemale-avatars%2F&psig=AOvVaw1BBsWY6z312ItmfGi_PrtX&ust=1620542829005000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKizltK-ufACFQAAAAAdAAAAABAD'
					/>
					Author name
				</Card.Header>
				<Card.Body>
					<Link to={'/blogs/' + slug.current}>
						<Card.Title>{title}</Card.Title>
					</Link>
					<Card.Text>{abstract}</Card.Text>
				</Card.Body>
				<hr style={{ width: '80%', margin: '0 auto' }} />
				<Link to={'/blogs/' + slug.current}>
					<Card.Footer>Continue Reading</Card.Footer>
				</Link>
			</Card>
		</div>
	);
};

export default BlogCard;
