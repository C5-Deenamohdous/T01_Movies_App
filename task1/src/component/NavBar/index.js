import React,{useContext} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { props } from "../../App";


function NavBar() {

    const lengthOfArray = useContext(props)
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">Movie App</a>
        <div className="navBarButton">
          <button className="btn btn-outline-success">
            {" "}
            <Link className="links" to={"/"}>
              Home
            </Link>
          </button>
          <button type="button" class="btn btn-primary position-relative">
            {" "}
            <Link className="links" to={"/addTOFav"}>
              Favorite
            </Link>{" "}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {lengthOfArray.length}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
