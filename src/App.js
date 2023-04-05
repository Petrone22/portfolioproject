import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Resume from "./pages/Resume";
import Home from "./pages/home";
import About from "./pages/about.jsx";
import Contact from "./components/contact";

function App() {
  const home = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <Router>
        <Nav handleScroll={handleScroll} />
        <Routes>
          {/* <Route path="/portfolioproject" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Contact />
    </div>
  );
}

export default App;
