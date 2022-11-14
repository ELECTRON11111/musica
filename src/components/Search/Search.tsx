import classes from "./Search.module.css";
import React from "react";
import SearchIcon from "../../assets/search.svg";

const Search = () => {
    return (
        <div className={classes.Container}>
            <img src={SearchIcon} alt="searchIcon"/>
            <input type="text" name="text" id="search-input" placeholder="Search artists"/>
            {/* <div className="input-field">
            </div> */}
        </div>
    );
}

export default Search;
