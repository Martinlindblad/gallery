import React, { useState, useEffect } from "react";
import './scss/standard/App.scss';
import SearchedShows from "./components/shows/searchedShows";
import SearchBar from "./components/shows/searchbar";

const App = () => {
  const [shows, setSeries] = useState([]);                    // JSON Response State
  const [searchValue, setSearchValue] = useState('');         // Search value state

  const getSeries = async (searchValue) => {                  // Async Get function calling api and setting it to state
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${searchValue}&embed=episodes`;  // Api call
    const response = await fetch(url);
    const data = await response.json();
    if (response) {
      try {
        setSeries(data)                       // Checking if response is okay, if true: set state
      } catch (e) {
        console.log(e);
      }
    }
  }

  useEffect(() => {                         // useEffect for updating application with the new search value
    getSeries(searchValue);
  }, [searchValue]);


  return (
    <div className="App f a-c d-c" >
      <SearchBar
        shows={shows}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <SearchedShows shows={shows}/>
    </div>
  )
}
export default App;
