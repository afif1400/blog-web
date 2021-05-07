import React from 'react';
import HomePage from './pages/Home';
import NavBar from './components/Navbar/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
