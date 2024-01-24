import './ArticleCardStyles.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const ArticleCard = (props) => {
  return (
    <div className='project-card'>
                <img src={props.imgsrc} alt="card-altalt" />
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                        <NavLink to={props.view} className="btn" >Voir</NavLink>
                        <Link to={props.link} className="btn" >Lire plus</Link>
                        
                    </div>
                </div>

            </div>
  )
}

export default ArticleCard
