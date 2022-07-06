import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/NavBar";

import OneMovie from "./component/OneMovie";
import AddToFav from "./component/AddToFav";
import FavPage from "./component/FavPage";

function App() {
  return (
    <div className="App">
     
    
      <NavBar />
      
      <Routes>
        
        <Route path="/" element={<Home />}></Route>

        <Route path="/oneMovie/:id" element={<OneMovie />}></Route>
        <Route path="/addTOFav" element={<FavPage />}></Route>

      </Routes>
    
    </div>
  );
}

export default App;
