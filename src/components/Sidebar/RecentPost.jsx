import React from 'react';
import { Card } from 'react-bootstrap';

const RecentPost = () => {
  return (
    <div>
      <Card>
        <Card.Img
          variant='top'
          src='https://images.all-free-download.com/images/graphicthumb/hd_picture_of_the_beautiful_natural_scenery_03_166249.jpg'
        />
        <Card.Body>
          <Card.Title>5 Easy Ways You Can Turn Future Into Success</Card.Title>
          <Card.Text>Author name&ensp;31 march 2021</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecentPost;
