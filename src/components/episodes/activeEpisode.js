import React from "react"

const ActiveEpisode = (props) => {                                                              // Component renders all information about the active episode
    function createMarkup() {
        return { __html: props.activeEpisode.summary };                                         // (Dangerously) going to set html.
    }
    return (
        <div className="active-episode-container">
            <div className="back-btn-container" onClick={() => { props.setActiveEpisode([]) }}>
                <div className="back-btn"></div>
            </div>
            <div className="active-episode">
                <div>
                    <h2>{props.activeEpisode.name}</h2>

                    {props.activeEpisode.image ?
                        <img src={props.activeEpisode.image.medium} alt={props.activeEpisode.name}></img> :
                        <div className="image-null f d-c a-c j-c"><p>404</p><p>¯\_(ツ)_/¯</p></div>
                    }
                </div>
                <div>
                    <p>Season: {props.activeEpisode.season}</p>
                    <p>Episode: {props.activeEpisode.number}</p>
                    <p>Aired {props.activeEpisode.airdate}</p>
                    <p dangerouslySetInnerHTML={createMarkup()} />
                </div>
            </div>
        </div>
    );
}
export default ActiveEpisode;