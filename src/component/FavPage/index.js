import React, { useEffect, useState , useContext} from "react";
import NavBar from "../NavBar";
import { useParams, useNavigate } from "react-router-dom";

import { props } from "../../App";
import "./style.css";
import { RiDeleteBin2Line } from "react-icons/ri";
function FavPage() {
    const navigate = useNavigate();
const { length, setLength, setFirst, setArrayOfId, first, arrayOfId } =
useContext(props);


  const deleteFromFav = (el) => {
  

    let deleted = first.filter((element, i) => {
      return element.id !== el.id;
    });
    localStorage.setItem("key", JSON.stringify(deleted));
    setFirst(deleted);
    let nextDelete = arrayOfId.filter((element) => {
        return el.id !== element;
      });
    localStorage.setItem("arrayId",JSON.stringify (nextDelete));
    setArrayOfId(nextDelete);
  };

  return (
    <div className="FullMainCont">
      <div className="container -Main">
        {first &&
          first.map((el) => {
            return (
              <div
                class="movie-card bg-fw"
                onClick={() => {
                                  navigate(`/oneMovie/${el.id}`);
                             }}
                             >    
                <img
                  src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                  class="card-img-top"
                  alt="..."
                  // onClick={() => {
                  //   navigate(`/movie/${el.id}`);
                  // }}
                />
 <span
                     onClick={() => {
                       deleteFromFav(el);
                     }}
                   >
                   <RiDeleteBin2Line className="deleteIcon"/>
                  </span>
                {/* <div class="movie-details">
                  <AddToFav element={element} />
                </div> */}
                
              </div>
            );
          })}
      </div>
    </div>


  );
}

export default FavPage;
