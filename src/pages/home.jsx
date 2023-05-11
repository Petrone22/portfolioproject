import React from "react";
import Hero from "../components/Hero";
import data from "../projects.json";
import form from "../assets/images/form.png";
import space from "../assets/images/space.png";
import enigma from "../assets/images/enigma.png";
import portfolio from "../assets/images/portfolio.png";
import Project from "../components/Project";
import AboutMe from "../components/AboutMe";
import musika from "../assets/images/musika.png";
const Home = ({ refName, refName2 }) => {
  return (
    <div className="Home">
      <Hero></Hero>
      <div className="about">
        <AboutMe refName={refName} />
      </div>
      <div className="projects-section" ref={refName2}>
        <Project
          title={data[4].title}
          description={data[4].description}
          linkgh={data[4].linkgh}
          linkPages={data[4].linkwebsite}
          img={musika}
        />
        <Project
          title={data[1].title}
          description={data[1].description}
          linkgh={data[1].linkgh}
          linkPages={data[1].linkwebsite}
          img={space}
        />
        <Project
          title={data[2].title}
          description={data[2].description}
          linkgh={data[2].linkgh}
          linkPages={data[2].linkwebsite}
          img={form}
        />

        <Project
          title={data[0].title}
          description={data[0].description}
          linkgh={data[0].linkgh}
          linkPages={data[0].linkwebsite}
          img={enigma}
        />
        <Project
          title={data[3].title}
          description={data[3].description}
          linkgh={data[3].linkgh}
          linkPages={data[3].linkwebsite}
          img={portfolio}
        />
      </div>
    </div>
  );
};

export default Home;
