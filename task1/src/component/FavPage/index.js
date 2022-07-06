import React, { useEffect, useState , useContext} from "react";
import NavBar from "../NavBar";
import { props } from "../../App";
import "./style.css";
import { RiDeleteBin2Line } from "react-icons/ri";
function FavPage() {

//   const [first, setFirst] = useState([]);
//   const [arrayOfId, setArrayOfId] = useState([]);

const { length, setLength, setFirst, setArrayOfId, first, arrayOfId } =
useContext(props);
//   console.log(lengthOfArray,"ppppppp[[[[[[");
//   useEffect(() => {
//     let storage = JSON.parse(localStorage.getItem("key")) || [];
//     setFirst(storage);
//     let moviesId = JSON.parse(localStorage.getItem("arrayId")) || [];
//     console.log(storage, "in favvvv pageee");
//     setArrayOfId(moviesId);

//   }, []);

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
                    <RiDeleteBin2Line/>
                  </button>
                </div>
              </div>
              {/* {lengthOfArray.setLength(first.length)} */}
            
            
            </>
            
          )
        })}
    </div>

  );
}

export default FavPage;
