import "./App.css";
import React, { createContext , useState,useEffect} from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/NavBar";

import OneMovie from "./component/OneMovie";
import AddToFav from "./component/AddToFav";
import FavPage from "./component/FavPage";

export const props = createContext();
function App() {
  const [first, setFirst] = useState([]);
  const [arrayOfId, setArrayOfId] = useState([]);
  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem("key")) || [];
    let moviesId = JSON.parse(localStorage.getItem("arrayId")) || [];
    console.log(storage, "[[[[[[[[");

    setFirst(storage);
    setArrayOfId(moviesId);
  }, []);
  const [length, setLength] = useState(0);
  return (
    <div className="App">
      <props.Provider
        value={{
          length,
          setLength,
          setFirst,
          setArrayOfId,
          first,
          arrayOfId

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
