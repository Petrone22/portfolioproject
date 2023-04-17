import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Nav = ({ handleScroll, refName, refName2 }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navClass, setNavClass] = useState("burgerBar");
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
  });

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
      <div className="nav-links nav-btns">
        <button className="nav-btn nav-button">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </button>
        <button
          className="nav-btn nav-button"
          style={{ display: location.pathname === "/" ? "inline" : "none" }}
          onClick={() => {
            handleScroll(refName);
          }}
        >
          <Link to="/" className="nav-link">
            About
          </Link>
        </button>

        <button
          className="nav-btn nav-button"
          onClick={() => {
            setNavOpen((PrevNav) => !PrevNav);
            setNavClass((prevNavClass) => "burgerBar");
            handleScroll(refName2);
          }}
        >
          {/* <a href="javascript:void(0)" className="nav-link">
            Work
          </a> */}
          Work
        </button>

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
      <div
        className="mobile-nav"
        style={{
          // display: navOpen ? "flex" : "none",
          top: navOpen ? "5rem" : "-50%",
          opacity: navOpen ? "1" : "0",
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
          style={{ display: location.pathname === "/" ? "inline" : "none" }}
          onClick={() => {
            setNavOpen((PrevNav) => !PrevNav);
            setNavClass((prevNavClass) => "burgerBar");
            handleScroll(refName);
          }}
        >
          <Link to="/" className="nav-link">
            About
          </Link>
        </button>
        <button
          className="nav-btn nav-button"
          onClick={() => {
            setNavOpen((PrevNav) => !PrevNav);
            setNavClass((prevNavClass) => "burgerBar");
            handleScroll(refName2);
          }}
        >
          {/* <a href="javascript:void(0)" className="nav-link">
            Work
          </a> */}
        </button>

        <button
          className="nav-btn nav-button"
          onClick={() => {
            setNavOpen((PrevNav) => !PrevNav);
            setNavClass((prevNavClass) => "burgerBar");
            handleScroll(refName2);
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
          <Link to="/contact" href="#" className="nav-link">
            Contact
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Nav;
