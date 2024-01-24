import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FondAcceuil5 from '../components/FondAcceuil2';
import RdvPris from '../components/RdvPris';

const RendezVousPris = () => {
  return (
    <div>
      <Navbar/>
      <FondAcceuil5 heading="Merci de votre visite" text="Votre requete va etre prise en compte" />
      <RdvPris/>
      <Footer/>
      
    </div>
  )
}

export default RendezVousPris
