import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import "./style.css"

function Home() {
 const navigate = useNavigate();
const [movies, setMovies] = useState("");
const getPopMovie =()=>{
 
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a&language=en-US&page=1`
  )
  .then((result)=>{
console.log(result);
setMovies(result.data.results)

  }).catch((err)=>{
    console.log(err);

  })
}
useEffect(()=>{
  getPopMovie()
},[])
  return (
    <div >
      {movies && movies.map((el,i)=>{
      return(
        <div className="allMovies" onClick={() => {(navigate(`/oneMovie/${el.id}`))}}>
<p> {el.title}</p>
<p>{el.release_date}</p>
<p>{el.popularity}</p>
<p>{el.original_language}</p>
<p>{el.overview}</p>
</div>
      )
    })}
    </div>
  )
}

export default Home