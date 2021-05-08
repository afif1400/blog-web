import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../../styles/blogcard.css';

const BlogCard = ({mainImage, slug, title, abstract}) => {
	return (
		<div className='blogcard'>
			<Card>
			       	<Card.Img
					variant='top'
					src={mainImage.asset.url}
					alt={mainImage.alt}
				/>
				<Card.Body>
					<Card.Title>
						{title}
					</Card.Title>
					<Card.Text>
						{abstract}
					</Card.Text>
				</Card.Body>
				<hr style={{width:"80%", margin:"0 auto"}}/>
				<Card.Footer>
					<Link>
					</Link>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default BlogCard;
