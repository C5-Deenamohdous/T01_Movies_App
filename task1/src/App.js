import "./App.css";
import React, { createContext , useState} from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/NavBar";

import OneMovie from "./component/OneMovie";
import AddToFav from "./component/AddToFav";
import FavPage from "./component/FavPage";

export const props = createContext();
function App() {
  const [length, setLength] = useState(0);
  return (
    <div className="App">
      <props.Provider
        value={{
          length,
          setLength,
        }}
      >
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/oneMovie/:id" element={<OneMovie />}></Route>
          <Route path="/addTOFav" element={<FavPage />}></Route>
        </Routes>
      </props.Provider>
    </div>
  );
}

export default App;
