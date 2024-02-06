import "./App.css";
import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";
import RestRoomApi from "./components/RestRoomApi";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ReviewForm from "./components/ReviewForm";

function App() {


  
  return (
    <div>
      <NavBar />
      <Routes>
        {/* <GoogleMapComponent /> */}
        <Route path="/" element={<RestRoomApi />} />
        <Route path="/About" element={<About />} />
        <Route path="/reviews" element={<ReviewForm />} />
      </Routes>
      <FooterBar />
    </div>
  );
}

export default App;
