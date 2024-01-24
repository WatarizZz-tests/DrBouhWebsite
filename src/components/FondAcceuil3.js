import './FondAcceuil3Styles.css';
import React from 'react'

const FondAcceuil3 = ( {heading, text} ) => {
  return (
    <div className='hero-img2'>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
      
    </div>
  )
}

export default FondAcceuil3