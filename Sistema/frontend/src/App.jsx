import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import Mapa from "./components/Mapa"
import Equipe from "./components/Equipe"
import Amostra from "./components/Amostra"
import Home from "./components/Home"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Mapa' element={<Mapa/>} />   
        <Route path='/Equipe' element={<Equipe/>}/>     
        <Route path='/Amostra' element={<Amostra/>} />  
        <Route path='/Home' element={<Home/>} />  
      </Routes>
    </Router>
    
    </>
  );
}
  
export default App;