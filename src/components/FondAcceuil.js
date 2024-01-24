import React from 'react';
import './FondAcceuilStyles.css';
import { Link } from "react-router-dom";
import IntroImg from "../assets/images/medic-enligne.jpg";

const FondAcceuil = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="heroimg" />

        </div>
        <div className="content">
            <p>Dr.Bouhenache , Cabinet Medical</p>
            <h1>Endocrinologie et Diabetologie</h1>
            <div className='smallscreenshowbtn'>
                <Link to="/Carriere" className="btn">Carriere</Link>
                <Link to="/RendezVous" className="btn-light">Rendez-Vous</Link>
            </div>

        </div>
      
    </div>
  )
}

export default FondAcceuil
