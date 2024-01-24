import './FondAcceuil5Styles.css';
import React from 'react'

const FondAcceuil5 = ( {heading, text} ) => {
  return (
    <div className='hero-img5'>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
      
    </div>
  )
}

export default FondAcceuil5