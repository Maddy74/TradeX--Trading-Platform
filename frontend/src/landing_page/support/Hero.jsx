import React from 'react'
import '../styles/support/Hero.css'

function Hero() {
  return (
    <section id="support">
      <div className="container">
        <div className="row">
          <div className="col-12 support-header">
            <p className="support-title">Support Portal</p>
            <button className="ticket-btn">My tickets</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="support-input">
              <span className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
              <input
                type="text"
                placeholder="Eg: How do I open my account, How do I activate F&O..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
