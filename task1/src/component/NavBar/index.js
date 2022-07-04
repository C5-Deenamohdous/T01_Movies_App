import React from 'react'
import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
<div className="container-fluid">
    <a className="navbar-brand" >Movie App</a>
    <div className='navBarButton'>

 <button className="btn btn-outline-success" > < Link  className='links' to={"/"}>Home</Link></button>
      <button className="btn btn-outline-success" > <Link className='links' to={"/addTOFav"}>Favorite</Link></button></div>

  </div>
</nav>
  )
}

export default NavBar