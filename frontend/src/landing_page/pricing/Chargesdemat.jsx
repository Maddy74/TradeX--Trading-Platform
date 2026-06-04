import React from 'react'
import '../styles/pricing/Chargesdemat.css'

function Charges3col() {
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
        <h1>Demat AMC (Annual Maintenance Charge)</h1>
        <div className="col-lg-12 col-md-10 col-12">
            <div className="table-wrapper">
                <table className="demataccount-table">
                    <thead>
                        <tr>
                            <th>Value of holdings</th>
                            <th>AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Up to ₹4 lakh</td>
                            <td><span className="badge-free">FREE</span></td>
                        </tr>
                        <tr>
                            <td>₹4 lakh - ₹10 lakh</td>
                            <td>₹ 100 per year, charged quarterly*</td>
                        </tr>
                        <tr>
                            <td>Above ₹10 lakh</td>
                            <td>₹ 300 per year, charged quarterly</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <p className='attention'>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha">click here</a></p>
</div>
  )
}

export default Charges3col
