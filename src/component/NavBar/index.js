import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { props } from "../../App";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { first, setFirst } = useContext(props);

  const SearchMovie = () => {

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1bfa430aada4409bfa6a3c5528128e8a&query=${searchText}`
      )
      .then((result) => {
        console.log(result,"iiiiiii");
        setFirst(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {

    SearchMovie();
  }, []);
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top NAVBAR">
      <div className="container-fluid">
        <div className="header">
          <a className="navbar-brand " ><h3>Dina's Movie</h3> </a>
        </div>

        <div className="navBarButton">
{/*     
        <input
        className="search"
        type="text"
        placeholder="Search.."
        name="search"
        onChange={(e) => {
          setSearchText(e.target.value);
          setSearch(true);
        }}
      />
      <span className="SEARCH-ICON">
        <AiOutlineSearch />
      </span> */}
      
      {search && searchText !== "" ? (
            <div className="resultInSearch">
              {first.length &&
                first.map((element) => {
                  return (
                    <>
                      {element.title !== null &&
                      element.title
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ? (
                        <div
                          className="title_photo_search"
                          onClick={() => {
                            navigate(`/oneMovie/${element.id}`);
                          searchText("");
                          }}
                        >
                          <div className="image-search">
                            <img src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`} onClick={() => {
                            navigate(`/oneMovie/${element.id}`);
                          searchText("");
                          }} />
                          </div>
                          <div className="Title-search">
                            <p>{element.title}</p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
            </div>
          ) : (
            ""
          )}
        {" "}
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
