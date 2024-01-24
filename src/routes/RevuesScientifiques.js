import React from 'react'
import Navbar from '../components/Navbar'
import FondAcceuil4 from '../components/FondAcceuil4'
import Footer from '../components/Footer'
import Article from '../components/Article'


const RevuesScientifiques = () => {
  return (
    <div>
      <Navbar/>
      <FondAcceuil4 heading="Cabinet Medical d'endocrinologie et diabétologie" text="Dr.Bouhenache Kaouter"/>
      <Article/>
      <Footer/>
    </div>
  )
}

export default RevuesScientifiques
