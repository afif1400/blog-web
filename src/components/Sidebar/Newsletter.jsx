import React from 'react';
import '../../styles/newsletter.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: '10px',
    padding: '12px 0',
    width: '100%',
    borderRadius: '25px',
    color: '#fff',
    background: 'linear-gradient(270deg, #FFA387 0%, #FE4F70 100%)',
  },
}));

const Newsletter = () => {
  const classes = useStyles();

  return (
    <div className='newsletter'>
      <h5 className='title'>Join 70,000 subscribers!</h5>
      <input type='email' placeholder='Email address...' />
      <Button variant='contained' className={classes.button}>
        Sign Up
      </Button>
    </div>
  );
};

export default Newsletter;
