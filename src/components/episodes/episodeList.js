import React from "react";

const EpisodeList = (props) => {

    return (
        <div className="episode-container f d-r wrap">
            {
                props.episodes.map((episode, i) => {
                    if (props.currentSeason === episode.season) {               // Will precede if current season match with the episodes season.
                        function createMarkup() {
                            if (episode.summary) {
                                let newSummary = episode.summary;                              //Convert response for summary to Markup.
                                let newLength = episode.summary.length;
                                let regex = /[.,]/g;
                                if (newLength > 100) {
                                    newSummary = newSummary.slice(3, newSummary.search(regex)).concat('...'); // WIll cut the string for summary if it's longer than 100 without removing the markup tag
                                }
                                return { __html: newSummary };                                        // (Dangerously) going to set html.
                            }
                        }
                        return (
                            <div key={i} className="episodes f d-r j-sa"
                                onClick={() => { props.setActiveEpisode(episode) }}
                            >
                                {episode.image ?
                                    <img src={episode.image.medium} alt={episode.image.medium}></img> :
                                    <div className="image-null f d-c a-c j-c"><p>404</p><p>¯\_(ツ)_/¯</p></div>
                                }
                                <div className="episode-summary">
                                    <h4>{episode.number + ". " + episode.name}</h4>
                                    <p dangerouslySetInnerHTML={createMarkup()} />
                                </div>
                            </div>
                        )
                    }
                    return null
                })
            }
        </div>
    )
}
export default EpisodeList;

// {
//     "image": episode.image.medium,
//     "name": episode.name,
//     "summary": episode.summary,
//     "airdate": episode.airdate,
//     "number": episode.number,
//     "season": episode.season
// }