//WHAT WE'RE DOING RIGHT NOW IS WE ARE TRYING TO SET UP THE NAV SO IT AUTO CLOSES AUTOMATICALLY WHEN CLICKED
import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Nav = ({ scrollToBottom }) => {
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
  useEffect(() => {
    window.addEventListener("resize", setNav);
  }, []);

  const setNav = () => {
    if (windowWidth.current >= 780) {
      setNavOpen((prevNav) => true);
      console.log("foo");
    } else if (windowWidth.current < 780) {
      if (navClass === "burgerBar") {
        setNavOpen((prevNav) => false);
      } else if (navClass === "openedBurger") {
        setNavOpen((preVnav) => true);
      }
    }
  };

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
        <button
          className="nav-btn nav-button"
          onClick={() => {
            setNavOpen((PrevNav) => !PrevNav);
            setNavClass((prevNavClass) => "burgerBar");
          }}
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </button>
        <button
          className="nav-btn nav-button"
          onClick={() => {
            setNavOpen((PrevNav) => !PrevNav);
            setNavClass((prevNavClass) => "burgerBar");
          }}
        >
          <Link to="/about" className="nav-link">
            About
          </Link>
        </button>
        <button
          className="nav-btn nav-button"
          onClick={() => {
            setNavOpen((PrevNav) => !PrevNav);
            setNavClass((prevNavClass) => "burgerBar");
          }}
        >
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </button>
        <button
          className="nav-btn nav-button"
          onClick={() => {
            setNavOpen((PrevNav) => !PrevNav);
            setNavClass((prevNavClass) => "burgerBar");
          }}
        >
          <a
            href="#"
            className="nav-link"
            onClick={() => {
              scrollToBottom();
              setNavClass((prevNavClass) => "burgerBar");
            }}
          >
            Contact
          </a>
        </button>
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
