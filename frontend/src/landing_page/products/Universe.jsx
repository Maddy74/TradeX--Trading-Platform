import React from 'react'
import '../styles/products/Universe.css'

function Universe({ imageURL }) {
  return (
    <div className='container'>
      <div className='row zerodha-uni'>
        <h2>The Zerodha Universe</h2>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='col-4 universe-images'>
          <img src="/media/images/zerodhaFundhouse.png" alt='zerodhaFundhouse' />
          <span className='universe-info'>
            Our asset management venture <br />
            that is creating simple and transparent index<br />
            funds to help you save for your goals.
          </span>
        </div>
        <div className='col-4 universe-images'>
          <img src="/media/images/sensibullLogo.svg" alt='SensiBull' />
          <span className='universe-info'>
            Options trading platform that lets you<br />
            create strategies, analyze positions, and examine<br />
            data points like open interest, FII/DII, and more.
          </span>
        </div>
        <div className='col-4 universe-images'>
          <img src="/media/images/tijori.svg" alt='SensiBull' />
          <span className='universe-info'>
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </span>
        </div>

        <div className='col-4 universe-images'>
          <img src="/media/images/streakLogo.png" alt='Streak' />
          <span className='universe-info'>
            Systematic trading platform<br />
            that allows you to create and backtest<br />
            strategies without coding.
          </span>
        </div>
        <div className='col-4 universe-images'>
          <img src="/media/images/smallcaseLogo.png" alt='SmallCase' />
          <span className='universe-info'>
            Thematic investing platform<br />
            that helps you invest in diversified<br />
            baskets of stocks on ETFs.
          </span>
        </div>
        <div className='col-4 universe-images'>
          <img src="/media/images/dittoLogo.png" alt='Ditto' />
          <span className='universe-info'>
            Personalized advice on life<br />
            and health insurance. No spam<br />
            and no mis-selling.
          </span>
        </div>
        <button className='p-2 fs-5 universe-btn mb-5'>Sign up for free</button>
      </div>
    </div>
  )
}

export default Universe
