import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h3>Programming</h3>
        <nav className="nav-container">
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#"> Login</a>
        </nav>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4PhKV9EvQUuHQKUOhPHY4xX6iQ4dPdC1DQ&usqp=CAU"
          alt=""
        />
      </div>
      <hr />
    </div>
  );
};

export default Header;
