import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Information"><Outlet/></div>
      <div className="Navigation" >
        <Navbar />
      </div>
    </div>
  );
}

export default App;
