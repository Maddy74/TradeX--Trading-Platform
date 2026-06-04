import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";

//  Use Protected API instead of axios
import API from "../utils/api";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

       // Correct way to access context
  const { closeBuyWindow } = useContext(GeneralContext);
  //  BUY ORDER FUNCTION
  const handleBuyClick = async () => {
    try {
      await API.post("/neworder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      alert("Order Placed Successfully");

      closeBuyWindow();
    } catch (error) {
      console.log("Order Error:", error);

      alert("Not Authorized ❌ Please login again!");

      // Redirect to login app
      window.location.href = "http://localhost:5173/login";
    }
  };

  // CANCEL BUTTON
  const handleCancelClick = () => {
    closeBuyWindow
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          {/* Quantity */}
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          {/* Price */}
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          {/* BUY */}
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>

          {/* CANCEL */}
          <button to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
