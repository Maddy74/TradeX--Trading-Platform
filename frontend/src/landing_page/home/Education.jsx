import React from 'react'
import '../styles/Home/Education.css'

function Education() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
        <div className='col-6'>
        <img src='media/images/education.svg'/>
          </div>
          <div className='col-6 education'>
            <h2>Free and open market education</h2>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <div className='education-links'>
            <a href=''>Varsity <i className="fa-solid fa-arrow-right"></i></a>
          </div>
            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <div className='education-links'>
            <a href=''>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
