import React, { useState } from "react";

const Hero = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const changeBG = () => {
    if (itemIndex === 0) {
      return {
        bgPosition: "0% 0%",
      };
    } else if (itemIndex === 1) {
      return {
        bgPosition: "0% -25%",
      };
    } else if (itemIndex === 2) {
      return {
        bgPosition: "0% -50%",
      };
    } else if (itemIndex === 3) {
      return {
        bgPosition: "0% -75%",
      };
    } else if (itemIndex === 4) {
      return {
        bgPosition: "0% -100%",
      };
    }
  };
  return (
    <div className="hero">
      <div className="menu-items">
        <a
          className="menu-item"
          onMouseEnter={() => {
            setItemIndex((previndex) => 1);
          }}
        >
          Hello 👋
        </a>
        <a
          className="menu-item"
          onMouseEnter={() => {
            setItemIndex((previndex) => 2);
          }}
        >
          I'm Mustafa Rashid
        </a>
        <a
          className="menu-item"
          onMouseEnter={() => {
            setItemIndex((previndex) => 3);
          }}
        >
          and I am a
        </a>
        <a
          className="menu-item magic"
          onMouseEnter={() => {
            setItemIndex((previndex) => 4);
          }}
        >
          Web Developer!
        </a>
        <div
          className="background-pattern"
          style={{ backgroundPosition: changeBG().bgPosition }}
        ></div>
      </div>
      <div className="dividor"></div>
    </div>
  );
};

export default Hero;
