import React from "react";
import "../../scss/components/searchbar.scss";

const SearchBar = (props) => {                                              // Component that will send a target value from the searchbar
                                                                            // Later will be used in App.js to render the single searched value 
    return (
        <div className="search-bar">
            <input placeholder="Search Show..." value={props.value}                   
                onChange={(e) => props.setSearchValue(e.target.value)}>
            </input>
        </div>
    )
}
export default SearchBar;