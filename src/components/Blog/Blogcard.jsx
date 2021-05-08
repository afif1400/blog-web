import React from 'react';
import { Card } from 'react-bootstrap';
import '../../styles/blogcard.css';

const BlogCard = () => {
	return (
		<div className='blogcard'>
			<Card>
			       	<Card.Img
					variant='top'
					src='https://iso.500px.com/wp-content/uploads/2014/12/landscapebest_1-1500x1000.jpg'
				/>
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
				<hr style={{width:"80%", margin:"0 auto"}}/>
				<Card.Footer>Continue Reading</Card.Footer>
			</Card>
		</div>
	);
};

export default BlogCard;
