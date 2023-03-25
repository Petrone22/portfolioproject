import "./App.css";
// import Hero from "./components/Hero";
import Nav from "./components/Nav";
// import Project from "./components/Project.jsx";
// import data from "./projects.json";
// import form from "./assets/images/form.png";
// import space from "./assets/images/space.png";
// import enigma from "./assets/images/enigma.png";
// import portfolio from "./assets/images/portfolio.png";
import Resume from "./pages/Resume";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/portfolioproject" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/portfolioproject/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
