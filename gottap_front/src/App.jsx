import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FooterBar from './components/FooterBar.jsx'
import GoogleMapComponent from "./components/GoogleMapComponent";

function App() {
  return (
    <div>
      <NavBar />
      <GoogleMapComponent />
      <FooterBar />
    </div>
  );
  }

export default App;
