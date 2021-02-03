import React, { useState, useEffect } from "react";
import Seasons from "./seasonList";
import Episodes from "../episodes/episodes";
import "../../scss/components/shows.scss";
import bg from "../../media/bg.jpg";

const SearchedShows = (props) => {                              // Components rendering the selected show and it's episodes
                                                                // Also renders a c component containing a list of seasons
    const [currentSeason, setCurrentSeason] = useState(1);      // State storing current season    
    useEffect(() => {
    }, [currentSeason])
    if (props.shows.length !== 0) {
        return (
            <div className="show-list f d-c" style={{ backgroundImage: `url("${bg}")` }}>
                <div className= "show f d-r j-c a-c fade-in">
                    {props.shows.image ?                                                                // If there is no image, it will replace it with a div
                        <img src={props.shows.image.medium} alt={props.shows.name}></img> :
                        <div className="image-null f d-c a-c j-c"><p>404</p><p>¯\_(ツ)_/¯</p></div>
                    }
                    <div className="info">
                        <h1>{props.shows.name}</h1>
                        <p>language: {props.shows.language}</p>
                        <p>Rating: {props.shows.rating.average}</p>
                        <Seasons
                            episodes={props.shows._embedded}
                            currentSeason={currentSeason}
                            setCurrentSeason={setCurrentSeason}
                        />
                    </div>
                </div>
                <Episodes
                    episodes={props.shows._embedded}
                    currentSeason={currentSeason}
                />
            </div>
        )
    }
    return (
        <div className="show-list f d-c" style={{ backgroundImage: `url("${bg}")` }}>
            <div className= "show f d-r j-c a-c fade-in"><h1 className="welcome">Welcome To My Gallery</h1></div>
        </div>
    )
}
export default SearchedShows;