import './NavbarStyles.css';
import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';



const Navbar = () => {
    const [click,setClick] = useState(false);
    const [color,setColor] = useState(false);

    const handleClick =() => setClick(!click);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);

        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll",changeColor);





  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/" >
            <h1>Dr.Bouhenache</h1>
            

        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Acceuil</Link>
            </li>
            <li>
                <Link to="/Carriere">Carriere</Link>
            </li>
             <li>
             <Link to="/About">A propos</Link>
            </li>
             <li>
             <Link to="/RendezVous">Prendre Rendez-Vous</Link>
             </li>
             <li>
             <Link to="/RevuesScientifiques">Articles</Link>
             </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"#fff"}} />) : (<FaBars size={20} style={{color:"#fff"}}/>)}
             
            
             </div>
      
    </div>
  )
}

export default Navbar
