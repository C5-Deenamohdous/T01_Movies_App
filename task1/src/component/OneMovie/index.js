import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useParams , useNavigate} from "react-router-dom"
import "./style.css"


function OneMovie() {
 const navigate = useNavigate();

  const {id} = useParams();
const [oneMovie, setOneMovie] = useState("")
const getOneMovie = () =>{
axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1bfa430aada4409bfa6a3c5528128e8a&language=en-US`).then((result)=>{
console.log(result);
setOneMovie(result.data)
}).catch((err)=>{
console.log(err);
})
}
useEffect(()=>{
  getOneMovie()
},[id])
  return (
  <div>
     
        <>
<img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}/>  
<p>title : {oneMovie.title}</p>
<p>Release_date : {oneMovie.release_date}</p>
<p>Popularity :{oneMovie.popularity}</p>
<p>Original_language :{oneMovie.original_language}</p>
<p>Overview : {oneMovie.overview}</p>
<p>Vote_average : {oneMovie.vote_average}</p>
<p>Run-Time: {oneMovie.runtime}</p>

<button  onClick={() => {(navigate(`/PopUp`))}}>Add To Favorite</button>

<button onClick={() => {(navigate(`/addTOFav`))}}>Go To Favorite</button>

</>
     
    
   
    </div>
  )
}

export default OneMovie