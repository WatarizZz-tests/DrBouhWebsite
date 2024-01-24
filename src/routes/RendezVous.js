import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from '../components/Form';
import FondAcceuil2 from '../components/FondAcceuil2';

const RendezVous = () => {
  return (
    <div>
      <Navbar/>
      <FondAcceuil2 heading="Prenez Rendez Vous" text="Remplissez le formulaire" />
      <Form/>
      <Footer/>
      
    </div>
  )
}

export default RendezVous
