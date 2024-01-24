import React from 'react';
import './index.css';
import {Routes,Route} from 'react-router-dom';
import Home from './routes/Home';
import About from'./routes/About';
import RendezVous from './routes/RendezVous';
import RendezVousPris from './routes/RendezVousPris';
import Carriere from './routes/Carriere';
import RevuesScientifiques from './routes/RevuesScientifiques';
import Article1 from './routes/RevuesScientifiques/Article1';
import Article2 from './routes/RevuesScientifiques/Article2';
import Article3 from './routes/RevuesScientifiques/Article3';

function App() {
  return (
    <div className="App">
     <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/RendezVous" element={<RendezVous/>} />
      <Route path="/RendezVousPris" element={<RendezVousPris/>} />
      <Route path="/Carriere" element={<Carriere/>} />
      <Route path="/RevuesScientifiques" element={<RevuesScientifiques/>} />
      <Route path="/RevuesScientifiques/Article1" element={<Article1/>} />
      <Route path="/RevuesScientifiques/Article2" element={<Article2/>} />
      <Route path="/RevuesScientifiques/Article3" element={<Article3/>} />
      
     </Routes>
     </>
    </div>
  );
}

export default App;
