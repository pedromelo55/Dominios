import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
  
        <NavMenu>
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Equipe' activeStyle>
            Equipe
          </NavLink>  
          <NavLink to='/Amostra' activeStyle>
            Amostra
          </NavLink>         
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Mapa'>Entrar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;