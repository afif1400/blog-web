import React from 'react';
import { Card } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';
import '../../styles/blogcard.css';

const BlogCard = () => {
	return (
		<div className='blogcard'>
			<Card>
				<Card.Img
					variant='top'
					src='https://iso.500px.com/wp-content/uploads/2014/12/landscapebest_1-1500x1000.jpg'
				/>
				<Card.Header>
					<Avatar
						style={{ marginRight: '10px' }}
						alt='RemySharp'
						src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Favatarideas%2Ffemale-avatars%2F&psig=AOvVaw1BBsWY6z312ItmfGi_PrtX&ust=1620542829005000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKizltK-ufACFQAAAAAdAAAAABAD'
					/>
					Author name
				</Card.Header>
				<Card.Body>
					<Card.Title>
						Almost before we knew it, we had left the ground.
					</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.Some quick example text to build on the
						card title and make up the bulk of the card's content.
					</Card.Text>
				</Card.Body>
				<hr style={{ width: '80%', margin: '0 auto' }} />
				<Card.Footer>Continue Reading</Card.Footer>
			</Card>
		</div>
	);
};

export default BlogCard;
