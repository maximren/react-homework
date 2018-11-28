import React, { Component } from 'react';
import "../App.css"

class Episodes extends Component {
    render() {
        return (
            <div className="cards"> {this.props.episodeData.results.map(episode =>
                <div className="card" key={episode.id}>
                    <span>Name: {episode.name}</span>
                    <span>Air date: {episode.air_date}</span>
                    <span>Episode: {episode.episode}</span>
                </div>
                )}
            </div>
        )
    }
}

export default Episodes;
