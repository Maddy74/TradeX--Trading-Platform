import React, {useState, useEffect} from "react";

//The below import statement is to initially to see how and where the data should be their.
// import {holdings} from '../data/data'

// import axios from 'axios';

// Use API instance instead of axios
import API from "../utils/api";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        //Protected Request (token auto attached)
        const res = await API.get("/allHoldings");

        console.log("Holdings Data:", res.data);
        setAllHoldings(res.data);
      } catch (err) {
        console.error("Holdings Fetch Error:", err);

        alert("Session expired  Please login again");

        // Redirect back to login app
        window.location.href = "http://localhost:5173/login";
      }
    };

    fetchHoldings();
  }, []);

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>

                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>

                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&amp;L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;