import "./App.css";
import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";
import RestRoomApi from "./components/RestRoomApi";

function App() {
  return (
    <div>
      <NavBar />
      <RestRoomApi />
      <FooterBar />
    </div>
  );
}

export default App;
