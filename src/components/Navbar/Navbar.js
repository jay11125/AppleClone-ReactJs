import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const NavLinks = () => (
  <>
    <li>
      <a href="#">Store</a>
    </li>
    <li>
      <a href="#">Mac</a>
    </li>
    <li>
      <a href="#">iPad</a>
    </li>
    <li>
      <a href="#">iPhone</a>
    </li>
    <li>
      <a href="#">Watch</a>
    </li>
    <li>
      <a href="#">AirPods</a>
    </li>
    <li>
      <a href="#">TV & Home</a>
    </li>
    <li>
      <a href="#">Only on Apple</a>
    </li>
    <li>
      <a href="#">Accessories</a>
    </li>
    <li>
      <a href="#">Support</a>
    </li>
  </>
);

const Navbar = () => {
  const [IsNavMenuVisible, setIsNavVisible] = useState(false);

  const handleBarClick = () => {
    setIsNavVisible(!IsNavMenuVisible);
    setTimeout(() => window.scrollTo({ top: 0 }), 100);
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="bars-logo">
            <a onClick={() => handleBarClick()} className="navbar-bars">
              <i className={`${!IsNavMenuVisible ? "fa fa-bars" : "fa fa-xmark"}`}></i>
            </a>
          </li>
          <li className="apple-logo">
            <a href="#">
              <i style={{ fontSize: "16px" }} className="fa-brands fa-apple"></i>
            </a>
          </li>
          <NavLinks />
          <li>
            <a href="#">
              <i className="fas fa-search"></i>
            </a>
          </li>
          <li className="shopping-bag">
            <a href="#">
              <i className="fas fa-shopping-bag"></i>
            </a>
          </li>
        </ul>
      </nav>
      {IsNavMenuVisible && (
        <div className="mobile-nav">
          <ul>
            <NavLinks />
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
