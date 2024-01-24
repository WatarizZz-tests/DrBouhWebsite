import React from 'react'
import Navbar from '../components/Navbar'
import FondAcceuil3 from '../components/FondAcceuil3'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <FondAcceuil3 heading="Cabinet Medical d'endocrinologie et diabétologie" text="Dr.Bouhenache Kaouter"/>
      <AboutContent/>
      <Footer/>
      
    </div>
  )
}

export default About
