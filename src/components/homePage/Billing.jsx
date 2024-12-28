import React from "react";
import Header from "../layout/Header";
const PaymentPage = () => {
  return (
    <>
<Header />
<hr />
    <div className="payment-container">
      <div className="product-details">
        <img
          src="https://via.placeholder.com/300x400"
          alt="Product"
          className="product-image"
        />
        <h2>Ultimate Guide</h2>
        <p className="product-price">$1,499.00</p>
      </div>

      <div className="payment-form">
        <h2>Pay with Card</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Card Information</label>
          <input type="text" placeholder="Card Number" required />
          <div className="card-details">
            <input type="text" placeholder="MM / YY" required />
            <input type="text" placeholder="CVC" required />
          </div>

          <label>Billing Address</label>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Address Line 1" required />
          <input type="text" placeholder="City" required />

          <button type="submit" className="pay-button">
            Pay $1,499.00
          </button>
        </form>
      </div>
    </div>
    
    </>
  );
};

export default PaymentPage;
