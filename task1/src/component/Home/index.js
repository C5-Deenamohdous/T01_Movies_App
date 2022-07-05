import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Home() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState("");
  const getPopMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a&language=en-US&page=1`
      )
      .then((result) => {
        console.log(result);
        setMovies(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPopMovie();
  }, []);
  return (

<div className="mainHome">

  {movies &&
         movies.map((el, i) => {
            return  <>
              
              <div class="card mb-3"
              id="dina" >
  <div className="row g-0"  >
     
      <div class="col-md-4" onClick={() => {
                   navigate(`/oneMovie/${el.id}`);
               }}> 
    <img class="locandina" src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{el.title}</h5>
        <p class="card-text">{el.overview.substring(0,200)}...</p>
        <p class="card-text"><small class="text-muted">{el.release_date}</small></p>
      </div>
    </div>
    
    </div>
</div> 
 </>
  }
   

  )
}  
</div>

)

}
export default Home;
