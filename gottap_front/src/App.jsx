
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RestRoomApi from './components/RestRoomApi'
import './App.css'
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FooterBar from './components/FooterBar.jsx'
import GoogleMapComponent from "./components/GoogleMapComponent";

function App() {
  return (
<>
    <div>
    <NavBar />
    </div>

<div>
<h1> App </h1>
<RestRoomApi />
</div>
    </>
  )
}


export default App;
