import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useRef } from "react";
import Nav from "./components/Nav";
import Resume from "./pages/Resume";
import Home from "./pages/home";
import Contact from "./components/contact";

function App() {
  const about = useRef(null);
  const projects = useRef(null);
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 15,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <Router>
        <Nav refName={about} refName2={projects} handleScroll={handleScroll} />
        <Routes>
          {/* <Route path="/portfolioproject" element={<Home />} /> */}
          <Route
            path="/"
            element={<Home refName={about} refName2={projects} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
