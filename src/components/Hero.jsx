import React from "react";
import Canva from "./threejs/canva";

const Hero = () => {
  return (
    <div className="hero">
      <div className="menu-items">
        <h1 className="menu-item">Hello 👋</h1>
        <h1 className="menu-item">I'm Mustafa</h1>
        <h1 className="menu-item">and I am a</h1>
        <h1 className="menu-item magic">Web Developer!</h1>
      </div>
      <div className="background-pattern">
        <Canva />
      </div>
      <div className="dividor"></div>
    </div>
  );
};

export default Hero;
