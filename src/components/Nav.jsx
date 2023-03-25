import React, { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [navClass, setNavClass] = useState("burgerBar");
  const changeClass = () => {
    if (!navOpen) {
      setNavClass((prevClass) => "openedBurger");
    } else if (navOpen) {
      setNavClass((prevClass) => "burgerBar");
    }
  };
  return (
    <div className="nav">
      <span className="name ">Mustafa.</span>
      <div
        className="nav-links"
        style={{
          // display: navOpen ? "flex" : "none",
          opacity: navOpen ? "1" : "0",
          pointerEvents: navOpen ? "auto" : "none",
        }}
      >
        <button className="nav-btn">Work</button>
        <button className="nav-btn">About</button>
        <button className="nav-btn">Resume</button>
        <button className="nav-btn">Contact</button>
      </div>
      <div
        className="hamburger"
        onClick={() => {
          setNavOpen((prevNav) => !prevNav);
          changeClass();
        }}
      >
        <div className={navClass} id="burgerBar"></div>
        <div className={navClass} id="burgerBar"></div>
        <div className={navClass} id="burgerBar"></div>
      </div>
    </div>
  );
};

export default Nav;
