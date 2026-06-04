import React from 'react'
import '../styles/pricing/Chargesaccountopen.css'

function Charges2col() {
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
        <h1>Charges for account opening</h1>
        <div className="col-lg-12 col-md-10 col-12">
            <div className="table-wrapper">
                <table className="account-table">
                    <thead>
                        <tr>
                            <th>Type of account</th>
                            <th>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Online account</td>
                            <td><span className="badge-free">FREE</span></td>
                        </tr>
                        <tr>
                            <td>Offline account</td>
                            <td><span className="badge-free">FREE</span></td>
                        </tr>
                        <tr>
                            <td>NRI account (offline only)</td>
                            <td>₹ 500</td>
                        </tr>
                        <tr>
                            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td>₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default Charges2col
