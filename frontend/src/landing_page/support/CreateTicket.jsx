import React from 'react'
import Accordion from './Accordion'
import '../styles/support/CreateTicket.css'

function CreateTicket() {
  return (
    <div className="ticket-layout">

      {/* LEFT SIDE */}
      <div className="ticket-left">

        <Accordion
          accordionId="accordionOne"
          flushId="flush-collapseOne"
          ariaControls="flush-collapseOne"
          flushCollapse="#flush-collapseOne"
          Icon={<i className="fa-solid fa-circle-plus"></i>}
          AccoridanTitle="Account Opening"
          Accordion1="Resident individual"
          Accordion2="Minor"
          Accordion3="Non Resident Indian (NRI)"
          Accordion4="Company, Partnership, HUF and LLP"
          Accordion5="Glossary"
        />

        <Accordion
          accordionId="accordionTwo"
          flushId="flush-collapseTwo"
          ariaControls="flush-collapseTwo"
          flushCollapse="#flush-collapseTwo"
          Icon={<i className="fa-regular fa-circle-user"></i>}
          AccoridanTitle="Your Zerodha Account"
          Accordion1="Your Profile"
          Accordion2="Account Modification"
          Accordion3="CMR & DP"
          Accordion4="Nomination"
          Accordion5="Transfer & conversion"
        />

        <Accordion
          accordionId="accordionThree"
          flushId="flush-collapseThree"
          ariaControls="flush-collapseThree"
          flushCollapse="#flush-collapseThree"
          AccoridanTitle="Kite"
          Accordion1="IPO"
          Accordion2="Trading FAQs"
          Accordion3="Margins"
          Accordion4="Charts & orders"
          Accordion5="Alerts"
          Accordion6="General"
        />

        <Accordion
          accordionId="accordionFour"
          flushId="flush-collapseFour"
          ariaControls="flush-collapseFour"
          flushCollapse="#flush-collapseFour"
          Icon={<i className="fa-solid fa-indian-rupee-sign"></i>}
          AccoridanTitle="Funds"
          Accordion1="Add Money"
          Accordion2="Withdraw"
          Accordion3="Bank accounts"
          Accordion4="eMandates"
        />

        <Accordion
          accordionId="accordionFive"
          flushId="flush-collapseFive"
          ariaControls="flush-collapseFive"
          flushCollapse="#flush-collapseFive"
          Icon={<i className="fa-solid fa-circle-notch"></i>}
          AccoridanTitle="Console"
          Accordion1="Portfolio"
          Accordion2="Corporate actions"
          Accordion3="Funds statement"
          Accordion4="Reports"
          Accordion5="Profile"
          Accordion6="Segments"
        />

        <Accordion
          accordionId="accordionSix"
          flushId="flush-collapseSix"
          ariaControls="flush-collapseSix"
          flushCollapse="#flush-collapseSix"
          Icon={<i className="fa-solid fa-coins"></i>}
          AccoridanTitle="Coin"
          Accordion1="Mutual funds"
          Accordion2="NPS"
          Accordion3="Features"
          Accordion4="Payments & Orders"
          Accordion5="General"
        />

      </div>

      {/* RIGHT */}
  <div className="ticket-right">

    {/* NOTICE */}
    <div className="notice-box">
      <ul>
        <li>
          <a href="">Evening session of MCX to remain closed on January 1, 2026</a>
        </li>
        <li>
          <a href="">Current Takeovers and Delisting – January 2026</a>
        </li>
      </ul>
    </div>

    {/* QUICK LINKS */}
    <div className="quick-links">
      <h4>Quick links</h4>
      <ol>
        <li><a href="">Track account opening</a></li>
        <li><a href="">Track segment activation</a></li>
        <li><a href="">Intraday margins</a></li>
        <li><a href="">Kite user manual</a></li>
        <li><a href="">Learn how to create a ticket</a></li>
      </ol>
    </div>
    </div>

    </div>
  )
}

export default CreateTicket
