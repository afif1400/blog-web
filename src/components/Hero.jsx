import { Typography } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/hero.css';

const Hero = () => {
  return (
    <Carousel className='hero'>
      <Carousel.Item className='imgBx'>
        <img
          className='d-block w-100'
          src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          alt='First slide'
        />
        <Carousel.Caption>
          <Typography variant='h3'>
            9 Most Awesome Blue Lake With Snow Mountain
          </Typography>
          <p>
            <span>Author Name</span>&ensp;<span>31 march 2021</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='imgBx'>
        <img
          className='d-block w-100'
          src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          alt='First slide'
        />
        <Carousel.Caption>
          <Typography variant='h3'>
            9 Most Awesome Blue Lake With Snow Mountain
          </Typography>
          <p>
            <span>Author Name</span>&ensp;<span>31 march 2021</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='imgBx'>
        <img
          className='d-block w-100'
          src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          alt='First slide'
        />
        <Carousel.Caption>
          <Typography variant='h3'>
            9 Most Awesome Blue Lake With Snow Mountain
          </Typography>
          <p>
            <span>Author Name</span>&ensp;<span>31 march 2021</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
