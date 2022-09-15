import React, { useState } from "react";
import search from "../../Assets/search.png";
import axios from "axios";
import "./Navbar.css";
import Results from "../Results/Results";

const NavBar = () => {
  const [repos, SetRepos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [reposList, setReposList] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    try {
      const { data } = await axios(`https://api.github.com/users/${searchInput}`);
      console.log(data);
      await SetRepos(data);
      try {
        axios.get(data.repos_url).then(res => {
          setReposList(res.data);
        }).catch(error => console.log(error))
      } catch(err) {
        console.log(err)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <nav>
        <div className="boxSearch">
          <input
            className="searchInput"
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleChange}
          />
          <button className="iconSearch" onClick={handleClick}>
            <img alt="" src={search} />
          </button>
        </div>
      </nav>
      <Results repos={repos} reposList={reposList} />
    </>
  );
};

export default NavBar;
