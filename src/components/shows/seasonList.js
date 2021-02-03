import React, { useState } from "react";

import "../../scss/components/seasonList.scss";

const Seasons = (props) => {                         // Component that is counting seasons and render them as Select Option list

    const [dropdown, toggleDropdown] = useState('closed')
    const episodes = props.episodes.episodes;
    let seasons = episodes.map((eps) => {             
        return eps.season;
    });

    const filteredSeasons = seasons.filter((item, pos, self) => {        // Function that checks if current number match with next number.
        return self.indexOf(item) === pos;                               // filtering out one of each season number and store it in a new array.
    });

    const handelToggle = () => {                                         // Function handling state for toggle open close on ul
        if(dropdown === 'open') {
            toggleDropdown('closed');
        }
        else{
            toggleDropdown('open');
        }
    } 

    return (
        <div className="season-container">
            <div className="seasons f d-c a-c j-c" onClick={handelToggle}>
                <p>Season: {props.currentSeason}</p>
                <ul id="seasons" className={`${dropdown}`}>
                    {filteredSeasons.map((season, i) => {
                        return <li key={i} value={season} onClick={() => props.setCurrentSeason(season)}>Season: {season}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Seasons;

