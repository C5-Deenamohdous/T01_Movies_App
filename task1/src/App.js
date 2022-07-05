import "./App.css";
import React, { createContext } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/NavBar";

import OneMovie from "./component/OneMovie";
import AddToFav from "./component/AddToFav";

export const props = createContext();
function App() {
  return (
    <div className="App">
        <props.Provider
        value={{

        }}
        >
      <NavBar />
      
      <Routes>
        
        <Route path="/" element={<Home />}></Route>

        <Route path="/oneMovie/:id" element={<OneMovie />}></Route>
        <Route path="/addTOFav" element={<AddToFav />}></Route>

      </Routes>
      </props.Provider>
    </div>
  );
}

export default App;
