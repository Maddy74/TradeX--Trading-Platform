import React from 'react'
import '../styles/pricing/PriceHero.css'

function Hero() {
  return (
    <div>
      <div className='container'>
        <div className='row price-heading'>
          <h1>Charges</h1>
          <p>List of all charges and taxes</p>
          <div className='price-line'/>
        
        <div className='col-4 charging-section'>
          <img src='/media/images/pricing0.svg' />
          <h2>Free equity delivery</h2>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4 charging-section'>
          <img src='/media/images/pricing20.svg' />
          <h2>Intraday and F&O trades</h2>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-4 charging-section'>
          <img src='/media/images/pricingMF.svg' />
          <h2>Free direct MF</h2>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
