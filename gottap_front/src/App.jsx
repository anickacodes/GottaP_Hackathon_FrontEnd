import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GoogleMapComponent from "./components/GoogleMapComponent";

function App() {
  return (
    <div>
      <h1> App </h1>
      <GoogleMapComponent />
    </div>
  );
}

export default App;
