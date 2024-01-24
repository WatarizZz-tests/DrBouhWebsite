import React from 'react';
import './FooterStyles.css';
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:" 2rem"}} />
                    <div>
                        <p>Les combattants, rue 4, n 78</p>
                        <p>Constantine</p>
                        </div>
                 </div>
                 <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    +213-550-789-412</h4>
                    </div>
                    <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    DrBouhenache-pro-contact@gmail.com</h4>
                    </div>
                 
                 
            </div>
        

            <div className='right'>
                <h4>A propos du cabinet</h4>
                <p>CAbinet Medical, Ouvert en 2026, numero de l'agrément #45798 </p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} />
                <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} />
                <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
