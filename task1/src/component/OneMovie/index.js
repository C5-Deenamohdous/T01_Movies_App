import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom"
import "./style.css"


function OneMovie() {
  const id = useParams();
const [oneMovie, setOneMovie] = useState("")
const getOneMovie = () =>{
axios.get("")
}
useEffect(()=>{
  getOneMovie()
},[id])
  return (
  <div>
      {oneMovie && oneMovie.map((el,i)=>{
      return(
        <>
<p> {el.title}</p>
<p>{el.release_date}</p>
<p>{el.popularity}</p>
<p>{el.original_language}</p>
<p>{el.overview}</p>
</>
      )
    })}
    </div>
  )
}

export default OneMovie