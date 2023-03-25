import React, { useRef, useState, useEffect } from "react";
const Nav = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [navClass, setNavClass] = useState("burgerBar");
  const windowWidth = useRef(window.innerWidth);
  const changeClass = () => {
    if (!navOpen) {
      setNavClass((prevClass) => "openedBurger");
    } else if (navOpen) {
      setNavClass((prevClass) => "burgerBar");
    }
  };

  const setNav = () => {
    if (windowWidth.current > 780) {
      setNavOpen((prevNav) => true);
    } else if (windowWidth.current < 780) {
      if (navClass === "burgerBar") {
        setNavOpen((prevNav) => false);
      } else if (navClass === "openedBurger") {
        setNavOpen((preVnav) => true);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("resize", setNav);
  }, []);

  return (
    <div className="nav">
      <span className="name ">Mustafa.</span>
      <div
        className="nav-links nav-btns"
        style={{
          // display: navOpen ? "flex" : "none",
          opacity: navOpen ? "1" : "0",
          pointerEvents: navOpen ? "auto" : "none",
        }}
      >
        <button className="nav-btn nav-button">
          <a id="navlink" href="/portfolioproject">
            Home
          </a>{" "}
        </button>
        <button className="nav-btn nav-button">Work </button>
        <button className="nav-btn nav-button">About</button>
        <button className="nav-btn nav-button">
          <a id="navlink" href="/resume">
            Resume
          </a>
        </button>
        <button className="nav-btn nav-button">Contact</button>
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
