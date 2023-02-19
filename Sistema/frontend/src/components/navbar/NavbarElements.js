import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #2b2929;
height: 55px;
width: 100vw;
display: flex;
aling-items: left;
justify-content: space-between;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
text-transform: uppercase;
color: #DCDCDC;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #5EBB62;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
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

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
text-transform: uppercase;
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #188454;
padding: 10px 22px;
color: #ffffff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;

export const FooterLink = styled.div`
  color: #000;
  margin-bottom: 10px;
  font-size: 10px;
  text-decoration: none;
   
 /* &:hover {
      color: #188454;
      transition: 200ms ease-in;
  }*/
`;
export const Box = styled.div`
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  font-size: 10px;
  width: 100%;
  left: 0;
  background-color: #DCDCDC;
  color: black;
  text-align: center;
    
  @media (max-width: 1000px) {
    padding: 50px 30px;
  }
`;
export const Logo = styled.div`
text-transform: uppercase;
color: #DCDCDC;
display: flex;
align-items: center;
text-decoration: none;
font-weight: bold;
padding: 0 1rem; 
height: 100%;
`;


