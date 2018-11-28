import React, { Component } from 'react';
import "../App.css"

class Characters extends Component {
    render() {
        return (
            
                <div className="cards"> {this.props.userData.results.map(character =>
                        <div className="card" key={character.id}>
                            <img key={character.id} alt="logo" src={character.image} className="image" />
                            <span>Name: {character.name}</span>
                            <span>Status: {character.status}</span>
                            <span>Species: {character.species}</span>
                        </div>
                )}</div>
            
        )
    }
}

export default Characters;