import React, { Component } from 'react';



class Header extends Component {
    render () {
        return (
            <div className = 'header'>
                <span>Navigation bar</span>

                <button onClick={this.props.getCharacters}>Characters</button>
                <button onClick={this.props.getLocations}>Locations</button>
                <button onClick={this.props.getEpisodes}>Episodes</button>

                <button onClick={this.props.loadPrev}>Backward</button>
                <button onClick={this.props.loadNext}>Forward</button>
                
            </div>
        )
    }
}

export default Header;

