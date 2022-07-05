import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
// import "./style.css";
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
      <div class="movie_card" id="bright">
        <div class="info_section">
          <div class="movie_header">
            <img
              class="locandina"
              src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
            />
            <h3>{oneMovie.title}</h3>
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
</button> */}
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
      </div>
    </>
  );
}

export default OneMovie;
