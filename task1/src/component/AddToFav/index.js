import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import { props } from "../../App";
import { BsHeart } from "react-icons/bs";
import { RiDeleteBin2Line } from "react-icons/ri";
function AddToFav({ el }) {
  const { length, setLength, setFirst, setArrayOfId, first, arrayOfId } =
    useContext(props);

  const add = () => {
    console.log(el.id, "ppppppp");
    let newArray = [...first, el];
    let idMovies = [...arrayOfId, el.id];
    localStorage.setItem("key", JSON.stringify(newArray));
    localStorage.setItem("arrayId", JSON.stringify(idMovies));

    setFirst(newArray);
    setArrayOfId(idMovies);
  };
  const deleteMovie = () => {
    let deleted = first.filter((element) => {
      return element.id !== el.id;
    });
    localStorage.setItem("key", JSON.stringify(deleted));
    setFirst(deleted);
    let nextDelete = arrayOfId.filter((element) => {
      return el.id !== element;
    });
    localStorage.setItem("arrayId", JSON.stringify(nextDelete));
    setArrayOfId(nextDelete);
  };
  console.log(el, "ADDDDDDDDD");
  return (
    <>
      {arrayOfId.includes(el.id) ? (
        <span  className="deleteIcon"
        title="delete from Favorite"
          onClick={() => {
            deleteMovie();
          }}
        >
            <RiDeleteBin2Line/>
        </span>
      ) : (
        <span className="favIconInOneMovie"
          type="button"
          title="Add to Favorite"
          // class="btn btn-primary"
          data-bs-toggle="modal" data-bs-target="#staticBackdrop"
        >
         <BsHeart/>
        </span>
      )}

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                {" "}
                Add Movie To Favorites
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Do you want to add <b>{el.title}</b> to favorites list?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  add();
                }}
              >
                YES
              </button>
            </div>
          </div>
        </div>
      </div> 
{/* 
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> 

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog popupIndex">
    <div class="modal-content ">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

*/}




    </>
  );
}

export default AddToFav;
