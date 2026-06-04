import React,{useState, useEffect} from "react";

//The below import statement is to initially to see how and where the data should be their.
// import {holdings, positions} from '../data/data'

// import axios from 'axios';

//Use protected API instance
import API from "../utils/api";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        //  Token automatically attached
        const res = await API.get("/allpositions");

        console.log("Positions Data:", res.data);
        setAllPositions(res.data);
      } catch (error) {
        console.log("Unauthorized", error);

        alert("Session expired. Please login again!");

        // Redirect back to login app
        window.location.href = "http://localhost:5173/login";
      }
    };

    fetchPositions();
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>

                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>

                  <td className={profClass}>{stock.net}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;