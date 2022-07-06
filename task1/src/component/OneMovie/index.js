import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import AddToFav from "../AddToFav";

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
      {/* <div class="movie_card" id="bright">
       
           
          
            <h5>{oneMovie.release_date}</h5>
            <span class="minutes"> {oneMovie.runtime} mins</span>
            <p class="type"> Revenue: {oneMovie.revenue} $</p>
          </div>
          <div class="movie_desc">
            <p class="text">{oneMovie.overview}</p>
          </div>
          <div class="movie_social">
            <ul>
              <li>
                <i class="material-icons">
                  {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Add To Favorites
</button>
                </i>
              </li>
              <AddToFav el={oneMovie} />
              <li>
                <i class="material-icons">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={() => {
                      navigate(`/addTOFav`);
                    }}
                  >
                    Go To Favorite
                  </button>
                </i>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="blur_back bright_back"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${oneMovie.backdrop_path}`,
          }}
        >
          {" "}
        </div>
      </div>  */}

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
      <ul class="movie-tags ">
        <li class="selected">8.5</li>
        <li>2019</li>
        <li>3h 1min</li>
        <li>Action</li>
      </ul>
      {/* <div style="clear:both"> </div> */}
      <p class="movie-info mt-3">
        After the devastating events of Avengers: Sonsuzluk Savaşı (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
      </p>
      <div class="bd-highlight">
      <a href="#" class="btn-watch"><i class="fas fa-play mr-2"></i>Watch Trailer</a>
      </div>
    </div>
  </div>
</div>
</div>



    </>
  );
}

export default OneMovie;
