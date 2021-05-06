import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
import './navbar.css';

const LoginButton = styled(Button)`
  color: #222;
  border-color: #222;

  &:hover {
    background: linear-gradient(to right, #fe4f70, #ffa387);
    border: none;
  }
`;
export const NavLink = styled(Link)`
  color: #222;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  border-radius: 100px;
  // transition: all 0.4s ease-in-out;
  margin: 1rem;
  height: 30px;
  justify-content: center;
  cursor: pointer;

  &.active {
    color: #fff;
    background: linear-gradient(to right, #fe4f70, #ffa387);
  }

  &:hover {
    text-decoration: none;
    color: #fff;
    background: linear-gradient(to right, #fe4f70, #ffa387);
    transition: 0.6s;
  }
`;

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='light'
        variant='light'
        // sticky='top'
        style={{minHeight: '8vh'}}
      >
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink to='/' style={{textDecoration: 'none'}} activeStyle>
              Home
            </NavLink>
            <NavLink
              to='/category'
              style={{textDecoration: 'none'}}
              activeStyle
            >
              category
            </NavLink>
            <NavLink to='/about' style={{textDecoration: 'none'}} activeStyle>
              about
            </NavLink>
          </Nav>
          <LoginButton variant='outline-info'>Search</LoginButton>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
