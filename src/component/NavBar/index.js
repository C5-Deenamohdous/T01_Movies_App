import React, { useContext, useEffect, useState, useRef } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { props } from "../../App";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  const inputElement = useRef(null);
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { first, setFirst } = useContext(props);
  const [array, setArray] = useState([]);
  const SearchMovie = (e) => {
    console.log(e, "oiiiiihhhhhii");
    console.log("iiiiiii");
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1bfa430aada4409bfa6a3c5528128e8a&language=en-US&page=1&include_adult=false&query=${e}
        `
      )
      .then((result) => {
        console.log(result, "iiiiiii");
        setArray(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top NAVBAR">
      <div className="container-fluid">
        <div className="header">
          <a className="navbar-brand ">
            <h3>Dina's Movie</h3>{" "}
          </a>
        </div>

        <div className="navBarButton">
          <div className="SEARCH-Container">
            <input
              className="search"
              type="text"
              placeholder="Search.."
              name="search"
              ref={inputElement}
              onChange={(e) => {
                if (e.target.value.length >= 1 && e.target.value !== "") {
                  setSearchInput(e.target.value);
                  setSearch(true);
                  SearchMovie(e.target.value);
                }
              }}
            />
            <span className="SEARCH-ICON">
              <AiOutlineSearch />
            </span>
            {array.length ? (
              <div className="resultInSearch">
                {array.map((element) => {
                  return (
                    <>
                      {
                        <div
                          className="title_photo_search"
                          onClick={() => {
                            navigate(`/oneMovie/${element.id}`);
                            inputElement.current.value = "";
                            setArray([]);
                          }}
                        >
                          <div className="image-search">
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                              onClick={() => {
                                navigate(`/oneMovie/${element.id}`);

                                inputElement.current.value = "";
                                setArray([]);
                              }}
                            />
                          </div>
                          <div className="Title-search">
                            <p>{element.title}</p>
                          </div>
                        </div>
                      }
                    </>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            )
          </div>{" "}
          <Link className="links home" to={"/"}>
            Home
          </Link>{" "}
          <Link className="links" to={"/addTOFav"}>
            <BsFillBookmarkHeartFill className="iconFav" />
          </Link>{" "}
          <span class="badge favSPAN">{first.length}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
