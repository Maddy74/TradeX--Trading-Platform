import React from 'react'
import '../styles/pricing/Chargesoptionvalue.css'
function Chargesoptionvalue() {
  return (
    <div className="container mt-5 mb-5">
    <div className="row justify-content-center">
        <h1>Charges for optional value added services</h1>
        <div className="col-lg-12 col-md-10 col-12">
            <div className="table-wrapper">
                <table className="optionaccount-table">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Billing Frquency</th>
                            <th>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tickertape</td>
                            <td>Monthly / Annual</td>
                            <td>Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr>
                            <td>Smallcase</td>
                            <td>Per transaction</td>
                            <td>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td>Kite Connect</td>
                            <td>Monthly</td>
                            <td>Connect: 500 | Personal: Free</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default Chargesoptionvalue
