import React from 'react'
import '../styles/support/Accordion.css'

function Accordion({
  flushId,
  ariaControls,
  flushCollapse,
  accordionId,
  Icon,
  AccoridanTitle,
  Accordion1,
  Accordion2,
  Accordion3,
  Accordion4,
  Accordion5,
  Accordion6
}) {
  return (
          <div className="accordion accordion-flush" id={accordionId}>
            <div className="accordion-item">

              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed icon"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={flushCollapse}
                  aria-expanded="false"
                  aria-controls={ariaControls}
                >
                  <span className="icon-wrapper">
                    {Icon}
                  </span>
                  <span className="accordion-title">{AccoridanTitle}</span>
                </button>
              </h2>

              <div
                id={flushId}
                className="accordion-collapse collapse"
>
                <div className="accordion-body">
                  <ul>
                    <li><a href="">{Accordion1}</a></li>
                    <li><a href="">{Accordion2}</a></li>
                    <li><a href="">{Accordion3}</a></li>
                    <li><a href="">{Accordion4}</a></li>
                    <li><a href="">{Accordion5}</a></li>

                    {/*  6th link conditional */}
                    {Accordion6 && (
                      <li><a href="">{Accordion6}</a></li>
                    )}
                  </ul>
                </div>
              </div>

            </div>
          </div>
            /* accordion Ends */


  )
}

export default Accordion
