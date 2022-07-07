import React,{useContext} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { props } from "../../App";
import {  BsFillBookmarkHeartFill} from "react-icons/bs";

function NavBar() {

    const {first} = useContext(props)
  return (
    
    <nav  className="navbar navbar-dark bg-dark fixed-top NAVBAR">
      <div className="container-fluid">

        <a className="navbar-brand header">Dina's Movie</a>

        <div className="navBarButton">
        
            {" "}
            <Link className="links home" to={"/"}>
              Home
            </Link>
         
         
            {" "}
            <Link className="links" to={"/addTOFav"}>
              <  BsFillBookmarkHeartFill className="iconFav"/>
            </Link>{" "}
            <span class="badge favSPAN">
            {first.length}
            </span>
         
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
