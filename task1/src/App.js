import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import AllMoives from "./component/AllMoives";
import OneMovie from "./component/OneMovie";
import AddToFav from "./component/AddToFav";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Routes>
        <Route path="/allMovies" element={<AllMoives />}></Route>
        <Route path="/oneMovie" element={<OneMovie />}></Route>
        <Route path="/addTOFav" element={<AddToFav />}></Route>

      </Routes>
    </div>
  );
}

export default App;
