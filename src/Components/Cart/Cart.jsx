import React from "react";
import "./Cart.css";
import Bookmark from "../BookMark/BookMark";
const Cart = (props) => {
  const totalTime = props.blogTime;
  const cartTitles = props.cartTitle;
  return (
    <div className="cart-section mx-4">
      <div className="total-time">
        <h4>Spent time on read : {totalTime} min</h4>
      </div>
      <div className="cart-body">
        <p>Bookmarked Blogs : {cartTitles.length}</p>
        {cartTitles.map((cartTitle) => (
          <Bookmark cartTitle={cartTitle}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Cart;
