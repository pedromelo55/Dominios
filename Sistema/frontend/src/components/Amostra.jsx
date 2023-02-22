import React, { useState } from 'react';
import Search from './search';
import {
    Label,
    Input
} from "reactstrap";


const Amostra = () => {

	const [numRel, setNumRel] = useState('');
    const [cooY, setCooY] = useState('');
	const [cooX, setCooX] = useState('');
    const [nspt1, setNspt1] = useState('');
    const [nspt2, setNspt2] = useState('');
	const [numAmostra, setNumAmostra] = useState('');
	

    const server = 'http://localhost:8080'

	async function Salvar() {
        const body = {
            num_rel: numRel,
			num_amostra: numAmostra,            
			cooX: cooX,
			cooY: cooY,
			nspt1: nspt1,
			nspt2: nspt2,
        }
        const response = await fetch(`${server}/salvar`, {
            method: "POST",             
            headers:{
                accept : "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify(body)            
        })
        if (response.status >= 200 && response.status <=300){
            const body = await response.json()
            console.log(body)                  
        } else {
        console.log("ERRO");
        }        
    }



	return (
		<div style={{backgroundColor: '', display:'flex', justifyContent:'center' ,width: '100%', height:'100vh', flexWrap: 'wrap', alignItems:'center'}}>
			<div style={{backgroundColor: '#eeeeee', display:'flex', justifyContent:'center' ,width: '80%', height:'80%', flexWrap: 'wrap', borderRadius:'20px', opacity : '0.98'}}>

				<div style={{backgroundColor: '', display:'flex', width: '100%', height:'20%', alignItems:'center', justifyContent:'center'}}>
					<Label style={{backgroundColor: '', textTransform:'uppercase', fontFamily: 'tisa_sans_probold', 
									fontWeight: 'normal', fontStyle: 'normal', fontSize:'35px'}}>
						Cadastro de amostras
					</Label>
				</div>
				
				<Search></Search>

				<div style={{backgroundColor: '', display:'flex', width: '100%', height:'60%'}}>
					<div style={{backgroundColor: '', display:'flex',  flexDirection: 'column', alignItems: 'center', justifyContent:'center', width: '100%', height:'100%'}}>
						<div style={{backgroundColor: '', display:'flex',  flexDirection: 'column', height:'50px', width:'500px', margin:'30px 0'}}>
							<Label style={{ textAlign:'start', marginBottom: '10px', fontSize:'18px' }}>Número do Relatório</Label>
							<Input style= {{width: '100%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px'}}
									value={numRel} onChange={(e) => setNumRel(e.target.value)}
							></Input>										
						</div>
						
						
						<div style={{backgroundColor: '', display:'flex',  flexDirection: 'column', height:'50px', width:'500px', margin:'30px 0'}}>
							<Label style={{ textAlign:'start', marginBottom: '10px', fontSize:'18px' }}>Coordenada Y</Label>
							<Input style={{width: '100%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px'}}
								value={cooY} onChange={(e) => setCooY(e.target.value)}
							></Input>	
						</div>
						<div style={{backgroundColor: '', display:'flex',  flexDirection: 'column', height:'50px', width:'500px', margin:'30px 0'}}>
							<Label style={{ textAlign:'start', marginBottom: '10px', fontSize:'18px' }}>Coordenada X</Label>
							<Input style={{width: '100%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px'}}
								value={cooX} onChange={(e) => setCooX(e.target.value)}
							></Input>	
						</div>
					</div>

					<div style={{backgroundColor: '', display:'flex',  flexDirection: 'column', alignItems: 'center', justifyContent:'center', width: '100%', height:'100%'}}>
						<div style={{backgroundColor: '', display:'flex',  flexDirection: 'column', height:'50px', width:'500px', margin:'30px 0'}}>
						<Label style={{ textAlign:'start', marginBottom: '10px', fontSize:'18px'  }}>Número da amostra</Label>
							<Input style= {{width: '100%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px'}}
									value={numAmostra} onChange={(e) => setNumAmostra(e.target.value)}
							></Input>	
						</div>
						<div style={{backgroundColor: '', display:'flex',  flexDirection: 'column', height:'50px', width:'500px', margin:'30px 0'}}>
							<Label style={{ textAlign:'start', marginBottom: '10px', fontSize:'18px' }}>Nspt 1o+2o - última amostra</Label>
							<Input style={{width: '100%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px'}}
								value={nspt1} onChange={(e) => setNspt1(e.target.value)}
							></Input>	
						</div>
						<div style={{backgroundColor: '', display:'flex',  flexDirection: 'column', height:'50px', width:'500px', margin:'30px 0'}}>
							<Label style={{ textAlign:'start', marginBottom: '10px', fontSize:'18px' }}>Nspt 2o+3o - última amostra</Label>
							<Input style={{width: '100%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px'}}
								value={nspt2} onChange={(e) => setNspt2(e.target.value)}
							></Input>	
						</div>
					</div>
						
				
				</div>
						<div style={{backgroundColor: '', display:'flex',  flexDirection: 'column', height:'100px', width:'100px', margin:'0px 0'}}>
							<button style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '6px 14px', 
							fontFamily: 'Roboto, sans-serif', borderRadius: '6px', border: 'none', fontSize: '16px',
							background: 'linear-gradient(180deg, #2ea44f 0%, #107E2C 100%)',
							color: '#fff',
							backgroundOrigin: 'border-box',
							boxShadow: '0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2)',
							cursor: 'pointer'
							}} onClick={() => Salvar()}>Salvar</button>         
							
							                    
						</div>   	

			
			</div>
		
		</div>
	)

};

export default Amostra;
