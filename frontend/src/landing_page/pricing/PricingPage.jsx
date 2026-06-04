import React from 'react'
import Hero from './Hero'
import OpenAccount from '../OpenAccount'
import Brokerage from '../pricing/Brokerage';
import ChargesPage from './ChargesPage';

function PricingPage() {
  return (
    <div>
      <Hero />
      <Brokerage />
      <ChargesPage />
    </div>
  )
}

export default PricingPage
