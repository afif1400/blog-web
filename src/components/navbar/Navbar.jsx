import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  justify-content: flex-start;
`;

export const NavLink = styled(Link)`
  color: #222;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  border-radius: 100px;
  // transition: all 0.4s ease-in-out;
  margin-left: 1rem;
  height: 30px;
  justify-content: center;
  cursor: pointer;
  &.active {
    color: #fff;
    background: linear-gradient(to right, #fe4f70, #ffa387);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavBarMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  width: 100vw;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBarBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: linear-gradient(to right, #fe4f70, #ffa387);
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  // margin-left: 24px;
  &:hover {
    transition: all 0.4s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
