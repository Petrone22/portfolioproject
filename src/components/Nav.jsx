import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
const Nav = ({ handleScroll, refName, refName2 }) => {
  const [navOpen, setNavOpen] = useState(true);
  const [navClass, setNavClass] = useState("openedBurger");
  const windowWidth = useRef(window.innerWidth);
  let location = useLocation();

  // console.log(location.pathname);

  const changeClass = () => {
    if (navOpen) {
      setNavClass((prevClass) => "burgerBar");
      setNavOpen((prevNav) => !prevNav);
      // setNavClass((prevClass) => "openedBurger");
      // setNavOpen((prevNav) => !prevNav);
    } else if (!navOpen) {
      // setNavClass((prevClass) => "burgerBar");
      // setNavOpen((prevNav) => !prevNav);
      setNavOpen((prevNav) => !prevNav);
      setNavClass((prevClass) => "openedBurger");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setNav);
  }, []);

  const setNav = () => {
    if (windowWidth.current >= 780) {
      setNavOpen((prevNav) => true);
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
          top: navOpen ? "5rem" : "-50%",
          opacity: navOpen ? "1" : "0",
        }}
      >
        <button
          className="nav-btn nav-button"
          onClick={() => {
            if (windowWidth.current < 700) {
              setNavOpen((PrevNav) => !PrevNav);
              setNavClass((prevNavClass) => "burgerBar");
            }
          }}
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </button>
        <button
          className="nav-btn nav-button"
          style={{ display: location.pathname === "/" ? "inline" : "none" }}
          onClick={() => {
            if (windowWidth.current < 700) {
              setNavOpen((PrevNav) => !PrevNav);
              setNavClass((prevNavClass) => "burgerBar");
              handleScroll(refName);
            } else {
              handleScroll(refName);
            }
          }}
        >
          <Link to="/" className="nav-link">
            About
          </Link>
        </button>

        {/* <button
          className="nav-btn nav-button"
          style={{ display: location.pathname === "/" ? "inline" : "none" }}
          onClick={() => {
            if (windowWidth.current < 700) {
              setNavOpen((PrevNav) => !PrevNav);
              setNavClass((prevNavClass) => "burgerBar");
            } else {
              handleScroll(refName2);
            }
          }}
        >
          <a href="#" className="nav-link">
            Projects
          </a>
        </button> */}
        <button
          className="nav-btn nav-button"
          onClick={() => {
            if (windowWidth.current < 700) {
              setNavOpen((PrevNav) => !PrevNav);
              setNavClass((prevNavClass) => "burgerBar");
              handleScroll(refName2);
            }
          }}
        >
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </button>
        <button
          className="nav-btn nav-button"
          onClick={() => {
            if (windowWidth.current < 700) {
              setNavOpen((PrevNav) => !PrevNav);
              setNavClass((prevNavClass) => "burgerBar");
            }
          }}
        >
          <Link to="/contact" href="#" className="nav-link">
            Contact
          </Link>
        </button>
      </div>
      <div
        className="hamburger"
        onClick={() => {
          changeClass();
          // setNavOpen((PrevNav) => !PrevNav);
          // setNavClass((prevNavClass) => "burgerBar");
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
