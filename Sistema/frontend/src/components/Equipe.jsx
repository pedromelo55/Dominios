import React from 'react';
import {
	FooterLink,
	Box,
  } from './navbar/NavbarElements';

const Equipe = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>		
		<section>
			<div>
			<img src= 'component1.png'/>
			</div>
		</section>

		</h1>
		<Box>
        <FooterLink>
         <div>		  		
			<img src='icone.png'/>
          <h2> GEOTÉCNICA</h2>
            <span >
             UFG Copyright © 2010 - 2020
            </span>
			</div>
         </FooterLink>
      </Box>
		</div>
	
);
};

export default Equipe;
