import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

function OneMovie() {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);
  const { id } = useParams();
  const [oneMovie, setOneMovie] = useState("");
  const getOneMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=1bfa430aada4409bfa6a3c5528128e8a&language=en-US`
      )
      .then((result) => {
        console.log(result);
        setOneMovie(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getOneMovie();
  }, [id]);
  return (
    <div>
      <>
        <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} />
        <p>title : {oneMovie.title}</p>
        <p>Release_date : {oneMovie.release_date}</p>
        <p>Popularity :{oneMovie.popularity}</p>
        <p>Original_language :{oneMovie.original_language}</p>
        <p>Overview : {oneMovie.overview}</p>
        <p>Vote_average : {oneMovie.vote_average}</p>
        <p>Run-Time: {oneMovie.runtime}</p>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Add To Favorites
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel"> Add Movie To Favorites</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Do you want to add {oneMovie.title} to favorites list?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">YES</button>
      </div>
    </div>
  </div>
</div>
     
     
        <button
          onClick={() => {
            navigate(`/addTOFav`);
          }}
        >
          Go To Favorite
        </button>
      </>
    </div>
  );
}

export default OneMovie;
