import React, { useState, useEffect } from "react";
import EpisodeList from "./episodeList"
import ActiveEpisode from "./activeEpisode"
import "../../scss/components/episodes.scss";
const Episode = (props) => {                                                    // Component render all episodes.
    const [activeEpisode, setActiveEpisode] = useState([]);

    useEffect(() => {                                                           // updates the state
    }, [activeEpisode]);

    const episodes = props.episodes.episodes;                                  // shorten down the amount of keys

    if (activeEpisode.length !== 0) {                                          // if state contains information, it will render the active episode component
        return (
            <ActiveEpisode
                activeEpisode={activeEpisode}
                setActiveEpisode={setActiveEpisode}
            />
        )
    }
    return (
        <EpisodeList                                                           // else it will render all episodes
            activeEpisode={activeEpisode}
            episodes={episodes}
            setActiveEpisode={setActiveEpisode}
            currentSeason={props.currentSeason}
        />
    )
}
export default Episode;