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
      window.removeEventListener("resize", setNav);
      setNavOpen((prevNav) => true);
      console.log("foo");
      return {
        opacity: "100%",
        pointerEvents: "auto",
      };
    } else if (windowWidth.current < 780) {
      if (navClass === "burgerBar") {
        window.removeEventListener("resize", setNav);
        setNavOpen((prevNav) => false);
        return {
          opacity: "0%",
          pointerEvents: "none",
        };
      } else if (navClass === "openedBurger") {
        window.removeEventListener("resize", setNav);
        setNavOpen((preVnav) => true);
        return {
          opacity: "100%",
          pointerEvents: "auto",
        };
      }
    }
  };
  setNav();
  return (
    <div className="nav">
      <span className="name ">Mustafa.</span>
      <div
        className="nav-links nav-btns"
        style={{
          // display: navOpen ? "flex" : "none",
          opacity: "1",
          pointerEvents: "auto",
        }}
      >
        <button className="nav-btn nav-button">
          <Link
            to="/"
            className="nav-link"
            onClick={() => {
              setNavOpen((PrevNav) => !PrevNav);
              setNavClass([(revClass) => "burgerBar"]);
            }}
          >
            Home
          </Link>
        </button>
        <button className="nav-btn nav-button">
          <Link
            to="/about"
            className="nav-link"
            onClick={() => {
              setNavOpen((PrevNav) => !PrevNav);
              setNavClass([(revClass) => "burgerBar"]);
            }}
          >
            About
          </Link>
        </button>
        <button className="nav-btn nav-button">
          <Link
            to="/resume"
            className="nav-link"
            onClick={() => {
              setNavOpen((PrevNav) => !PrevNav);
              setNavClass([(revClass) => "burgerBar"]);
            }}
          >
            Resume
          </Link>
        </button>
        <button
          className="nav-btn nav-button"
          onClick={() => {
            setNavOpen((PrevNav) => !PrevNav);
            setNavClass([(revClass) => "burgerBar"]);
          }}
        >
          <a
            href="#"
            className="nav-link"
            onClick={() => {
              scrollToBottom();
            }}
          >
            Contact
          </a>
        </button>
        <button className="nav-btn nav-button"></button>
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
