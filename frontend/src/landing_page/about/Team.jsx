import React from 'react'
import '../styles/about/Team.css'

function Team() {
  return (
    <div className='container'>
      <div className='row about-heading'>
        <h1>People</h1>
        </div>

        <div className='team-row-between'>
        <div className='col-6 Team1'>
        <img src='/media/images/nithinKamath.jpg' />
        <h4>G Madhav Sharma</h4>
        <p>Founder, CEO</p>
      </div>
      <div className='col-6 Team2'>
        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
        <p>Playing basketball is his zen.</p>
        <p>Connect on <a href=''>Homepage</a> / <a href=''>TradingQnA</a> / <a href=''>Twitter</a></p>
      </div>
      </div>
    </div>
  )
}

export default Team
