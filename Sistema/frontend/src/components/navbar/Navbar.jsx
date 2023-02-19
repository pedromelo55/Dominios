import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  FooterLink,
  Box,
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
      <Box>
        <FooterLink>
         <img src="../public/icone.png" alt="" />
          <h2> GEOTÉCNICA</h2>
            <span style={{marginTop: "5px" }}>
             UFG Copyright © 2010 - 2020
            </span>
         </FooterLink>
      </Box>
    </> 
  
  );
};
  
export default Navbar;
