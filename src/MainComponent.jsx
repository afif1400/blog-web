import React from 'react';
import HomePage from './pages/Home';
import NavBar from './components/navbar/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function MainComponent(props) {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path='/' component={HomePage} />
      </Router>
    </>
  );
}
