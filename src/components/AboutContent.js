import React from 'react';
import './AboutContentStyles.css';
import { Link } from 'react-router-dom';
import React1 from "../assets/images/React1.webp";
import React2 from "../assets/images/React2.webp";


const AboutContent = () => {
  return (
    <>
    <div className='about'>
        <div className='left'>
            <h1>Qui sommes nous ?</h1>
            <p>Notre cabinet medical propose des actes de prévention ainsi qu'un accompagnement personnalisé, pour adopter de nouveaux comportements favorables à la santé afin:

            <p>-d'éviter ou de retarder certaines maladies et ainsi vivre en meilleure santé, avec une meilleure qualité de vie </p>
            <p>- de vivre « mieux » avec la maladie et d'améliorer son évolution lorsqu'elle est là.</p>
            <p>À côté des consultations et examens dits «classiques», les professionnels de santé du Centre ajoutent prioritairement une approche de prévention  « active » personnalisée.
L'objectif est de faire prendre conscience et de mieux gérer les risques santé.</p>


</p>
            <Link to="/contact" >
                <button className="btn">Contact</button></Link>

        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack-top'>
                    <img src={React1} alt="aboutpage" className='img' />
                </div>
                <div className='img-stack-bottom'>
                    <img src={React2} alt="aboutpage" className='img' />
                </div>
            </div>

        </div>
      
    </div>
    <div className='parag'><p>Ou nous trouver:</p></div>
    <div className='map-responsive'>
        
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.3015295520123!2d6.605843157784629!3d36.35500087820013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f177737c77cd1d%3A0xcc35b5649b1e1aba!2zRGVybWF0b2xvZ3VlIGFvdWlzc2F0INi32KjZitio2Kkg2KfZhNin2YXYsdin2LYg2KfZhNis2YTYr9mK2Kk!5e0!3m2!1sfr!2sdz!4v1701692438538!5m2!1sfr!2sdz" width="1200" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="emplacement cabinet"></iframe>

    </div>
    </>
  )
}

export default AboutContent
