import React, { useEffect, useState } from "react";
import "./style.css";

function AddToFav({ el }) {
  console.log(el, "oooooooooo");

  const [first, setFirst] = useState([]);
  const [arrayOfId, setArrayOfId] = useState([]);
  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem("key")) || [];
    let moviesId = JSON.parse(localStorage.getItem("arrayId")) || [];
    console.log(storage, "[[[[[[[[");

    setFirst(storage);
    setArrayOfId(moviesId);
  }, []);

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
    localStorage.setItem("key",JSON.stringify (deleted));
    setFirst(deleted);
    let nextDelete = arrayOfId.filter((element) => {
      return el.id !== element;
    });
    localStorage.setItem("arrayId",JSON.stringify (nextDelete));
    setArrayOfId(nextDelete);
  };
  console.log(el, "ADDDDDDDDD");
  return (
    <>
      {arrayOfId.includes(el.id) ? (
        <button
          onClick={() => {
            deleteMovie();
          }}
        >
          Remove
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add To Favorites
        </button>
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
              Do you want to add {el.title} to favorites list?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
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
    </>
  );
}

export default AddToFav;
