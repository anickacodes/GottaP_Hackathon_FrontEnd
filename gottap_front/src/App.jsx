import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import FooterBar from './components/FooterBar.jsx'
import GoogleMapComponent from "./components/GoogleMapComponent";
import LocationSearch from "./components/LocationSearch.jsx";

function App() {
  const [search, setSearch] = useState('')

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
  }

  useEffect(handleSearch)

  return (
<>
    <div>
      <NavBar />
      <LocationSearch
        onSearch={handleSearch}
      />
      {/* <GoogleMapComponent /> */}
      <FooterBar />
    </div>
    </>
  );
}

export default App;
