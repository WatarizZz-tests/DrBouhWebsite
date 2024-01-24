import './FondAcceuil2Styles.css';
import React from 'react'

const FondAcceuil2 = ( {heading, text} ) => {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
      
    </div>
  )
}

export default FondAcceuil2