import React from 'react'
import '../styles/products/Rightsection.css'

function RightSection({imageURL, productName, productDescription, learnMore,}) {
  return (
    <div className='container'>
      <div className='row right-section'>
        <div className='col-6 left-content'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className='Demo-links'>
          <a href={learnMore} className='Demo-1'>Learn More <i className="fa-solid fa-arrow-right"></i></a> 
          </div>
        </div>
          <div className='col-6 right-image'><img src={imageURL} alt='Console Image' />
        </div>
      </div>
    </div>
  )
}

export default RightSection
