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
    const [numFuro, setNumFuro] = useState('');
    const [nspt1, setNspt1] = useState('');
    const [nspt2, setNspt2] = useState('');
	const [num_amostra, setNumAmostra] = useState('');
	

    const server = 'http://localhost:8080'

	async function Salvar() {
        const body = {
            num_rel: numRel,
            num_furo: numFuro,
			cooX: cooX,
			cooY: cooY,
			nspt1: nspt1,
			nspt2: nspt2,
			num_amostra: num_amostra
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
						<div style={{backgroundColor: '', display:'flex',  flexDirection: 'row', height:'50px', width:'500px', margin:'30px 0'}}>
							<Label style={{ textAlign:'start', marginBottom: '10px', fontSize:'18px' }}>Número do Relatório</Label>
							<Input style= {{width: '50%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px'}}
									value={numRel} onChange={(e) => setNumRel(e.target.value)}
							></Input>

							<Label style={{ textAlign:'start', marginBottom: '10px', fontSize:'18px' }}>Número da amostra</Label>
							<Input style= {{width: '50%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px'}}
									value={numRel} onChange={(e) => setNumAmostra(e.target.value)}
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
							<Label style={{ textAlign:'start', marginBottom: '10px', fontSize:'18px' }}>Número do Furo</Label>
							<Input style={{width: '100%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px'}}
								value={numFuro} onChange={(e) => setNumFuro(e.target.value)}
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


				<div style={{backgroundColor: 'black', display:'flex', width: '100%', height:'20%', alignItems:'center', justifyContent:'center'}}>
					<button onClick={() => Salvar()}>Salvar</button>                                
				</div>   	
			
			</div>
			


		
		</div>
	)

};

export default Amostra;
