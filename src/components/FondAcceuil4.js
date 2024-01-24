import './FondAcceuil4Styles.css';
import React from 'react'

const FondAcceuil4 = ( {heading, text} ) => {
  return (
    <div className='hero-img4'>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
      
    </div>
  )
}

export default FondAcceuil4