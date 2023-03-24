import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Project from "./components/Project.tsx";
import data from "./projects.json";
import form from "./assets/images/form.png";
import space from "./assets/images/space.png";
import enigma from "./assets/images/enigma.png";
import portfolio from "./assets/images/portfolio.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className="projects-section">
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
          title={data[3].title}
          description={data[3].description}
          linkgh={data[3].linkgh}
          linkPages={data[3].linkwebsite}
          img={portfolio}
        />

        <Project
          title={data[0].title}
          description={data[0].description}
          linkgh={data[0].linkgh}
          linkPages={data[0].linkwebsite}
          img={enigma}
        />
      </div>
    </div>
  );
}

export default App;
