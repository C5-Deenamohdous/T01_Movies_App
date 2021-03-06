import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { props } from "../../App";

function Home() {
 

  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState("");
  const getPopMovie = (page) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a&language=en-US&page=${page}`
      )
      .then((result) => {
        console.log(result);
        setMovies([...movies, ...result.data.results]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPopMovie();
  }, []);
  return (
    <>
      <h2 className="headOfHome">Popular Movies</h2>

      <div className="mainHome">

        {movies &&
          movies.map((el, i) => {
            return (
              <>
                <div class="card mb-3" id="dina">
                  <div className="row g-0">
                    <div
                      class="col-md-4"
                      onClick={() => {
                        navigate(`/oneMovie/${el.id}`);
                      }}
                    >
                      <img
                        class="locandina"
                        src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                      />
                    </div>
                    <div
                      class="col-md-8"
                      onClick={() => {
                        navigate(`/oneMovie/${el.id}`);
                      }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">{el.title}</h5>
                        <p class="card-text">
                          {el.overview.substring(0, 200)}...
                        </p>
                        <p class="card-text date">
                          <small class="text-muted">
                            <b>{el.release_date}</b>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="btnLoad">
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => {
            setPage(page + 1);
            getPopMovie(page + 1);
          }}
        >
          Load More
        </button>
      </div>
    </>
  );
}
export default Home;
