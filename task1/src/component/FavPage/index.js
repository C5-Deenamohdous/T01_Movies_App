import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";

import "./style.css";

function FavPage() {
  const [first, setFirst] = useState([]);
  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem("key")) || [];
    setFirst(storage);
    console.log(storage, "in favvvv pageee");
  }, []);

  const deleteFromFav = (el) => {
    let deleted = first.filter((element, i) => {
      return element.id !== el.id;
    });
    localStorage.setItem("key", JSON.stringify(deleted));
    setFirst(deleted);
  };

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
       
      {first &&
        first.map((el, i) => {
          return (
            <>
              <div class="col">
                <div class="card">
                  <img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{el.title}</h5>
                    <p class="card-text">
                     {el.runtime}mins
                    </p>
                    <p class="card-text">{el.vote_count} Votes </p>
                  </div>
                  <button
                    onClick={() => {
                      deleteFromFav(el);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
             {/* <NavBar  el ={first.length}/> */}
              {console.log(first.length, " {{{{{{{{{")};
            </>
            
          );
        })}
    </div>

  );
}

export default FavPage;
