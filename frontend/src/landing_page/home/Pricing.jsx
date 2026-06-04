import React from 'react'
import '../styles/Home/HomePricing.css'

function Pricing() {
  return (
      <div className='container'>
        <div className='row'>
          <div className='col-4 home-pricing'>
            <h2>Unbeatable pricing</h2>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <div className='home-pricing-links'>
            <a href=''>See pricing <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          </div>
          <div className='col-2'></div>
          <div className='col-6'>
            <div className='row'>
              <div className='col home-price-table'>
                <h1>&#8377;0</h1>
                <p>Free equity delivery and <br/>direct mutual funds</p>
              </div>
              <div className='col home-price-table'>
                <h1>&#8377;20</h1>
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Pricing
