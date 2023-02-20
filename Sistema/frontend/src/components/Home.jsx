import React from 'react';
import {
	FooterLink,
	BoxCenter,
    Box,
    Nav,
    NavBtnHome,
    NavBtnLinkHome,
    BoxHome,
  } from './navbar/NavbarElements';

const Home = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
    <BoxCenter>
         <h2>Apoio à Geotécnica</h2>
            <span >
            Visualize os dados dos subsolos em Goiânia!
            </span>
			<br />
            <br />
            <NavBtnHome>
          <NavBtnLinkHome to='/Mapa'>Clique aqui!</NavBtnLinkHome>
        </NavBtnHome>
    
    </BoxCenter>
	<BoxHome>
        <FooterLink>
         <div>		  		
			<img src='icone.png'/>
          <h2> GEOTÉCNICA</h2>
            <span >
             UFG Copyright © 2010 - 2020
            </span>
			</div>
         </FooterLink>
      </BoxHome>
		</div>
	
);
};

export default Home;
