import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      
      <Nav>
      <Logo to='/Geotécnica' activeStyle>
              Geotécnica
          </Logo>
        <NavMenu>
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Equipe' activeStyle>
            Equipe
          </NavLink>  
          <NavLink to='/Mapa' activeStyle>
            Visualize
          </NavLink>         
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Amostra'>Cadastrar</NavBtnLink>
        </NavBtn>
        
      </Nav>
    
    </> 
  
  );
};
  
export default Navbar;
