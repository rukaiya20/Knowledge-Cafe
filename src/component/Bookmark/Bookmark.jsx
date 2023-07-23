import React from "react";
import "./Bookmark,.css";

const Bookmark = (props) => {
  
  const title = props.cartTitle;

  return (
    <div className="bookMark-cart">
      <p>{title}</p>
    </div>
  );
};

export default Bookmark;
