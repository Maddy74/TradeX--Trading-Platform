import React from 'react'
import '../styles/products/ProductHero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='container products'>
    <div className='row product-heading'>
    <h1>Zerodha Products</h1>
    <div className='para-link'>
    <p>Sleek, modern, and intuitive trading platforms</p>
    </div>
    <p>Check out our <Link>investment offerings <i className="fa-solid fa-arrow-right"></i></Link></p>
    </div>
    <div className='prod-line'/>
    </div>
  )
}

export default Hero
