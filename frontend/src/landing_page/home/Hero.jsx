import React from 'react'
import '../styles/Home/HomeHero.css'

function Hero() {
  return (
    <div className='container p-5 hero'>
      <div className='row text-center Hero-info'>
        <img src='/media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
        <h1 className='mt-5'>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='p-2 fs-5 Home-btn mb-5'>Sign up for free</button>
      </div>
    </div>
  )
}

export default Hero
