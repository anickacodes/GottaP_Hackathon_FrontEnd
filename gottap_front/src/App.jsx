import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FooterBar from "./components/FooterBar.jsx";
import GoogleMapComponent from "./components/GoogleMapComponent";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          {/* <GoogleMapComponent /> */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <FooterBar />
      </Router>
    </div>
  );
}

export default App;
