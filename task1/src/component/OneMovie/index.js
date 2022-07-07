import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import AddToFav from "../AddToFav";
import { AiFillStar } from "react-icons/ai";
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
    <>
      

<div className="mainOneMovie" >
<div class="movie-container m-5 p-5 mainnnnn  "  style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original${oneMovie.backdrop_path}")`,
              backgroundSize: "cover",
              
            }}
>
  <div className="Over"></div>
  <div class="row d-flex align-items-stretch stretchesss">
    <div class="col-md-5 col-lg-5 imageeMovie">
      <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}/>
    </div>
    <div class="col-md-7 col-lg-7 d-flex flex-column justify-content-start infoOneMovie insideee">
      <h1 class="mb-3">{oneMovie.title}</h1>
      <ul class="movie-tags allTags">
        <li class="selected">{oneMovie.vote_average} <AiFillStar/></li>
        <li>{oneMovie.release_date}</li>
        <li>{oneMovie.runtime} min</li>
        <li>{oneMovie.revenue} $</li>
      </ul>
     
      <p class="movie-info mt-3">
      {oneMovie.overview}
      </p>
      <div class="bd-highlight">
  
      <AddToFav el={oneMovie} />
      {/* <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={() => {
                      navigate(`/addTOFav`);
                    }}
                  >
                    Go To Favorite
                  </button> */}
      </div>
    </div>
  </div>
</div>
</div>



    </>
  );
}

export default OneMovie;
