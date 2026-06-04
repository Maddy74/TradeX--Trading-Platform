import React from 'react'
import '../styles/products/Leftsection.css'

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay,appStore,}) {
  return (
    <div className='container'>
      <div className='row left-section'>
        <div className='col-6 left-image'><img src={imageURL} alt='Kite Image' />
        </div>
        <div className='col-6 right-content'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className='Demo-links'>
          <a href={tryDemo} className='Demo-1'>Try Demo <i className="fa-solid fa-arrow-right"></i></a> 
          <a href={learnMore} className='Demo-2'>Learn More <i className="fa-solid fa-arrow-right"></i></a> 
          </div>
          <div className='store-links'>
          <a href={googlePlay} className='store-1'><img src="/media/images/googlePlayBadge.svg" alt='Google Play Store'/></a> 
          <a href={appStore} className='store-2'><img src="/media/images/appstoreBadge.svg" alt='Apple Store'/></a> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
