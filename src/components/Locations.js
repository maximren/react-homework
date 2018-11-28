import React, { Component } from 'react';
import "../App.css"

class Locations extends Component {
    render() {
        return (
            <div className="cards">
                {this.props.locationData.results.map(location =>
                    <div className="card" key={location.id}>
                        <span>Name: {location.name}</span>
                        <span>Type: {location.type}</span>
                        <span>Dimension: {location.dimension}</span>
                        <span>Created: {location.created}</span>
                    </div>
                )}
            </div>
        )
    }
}

export default Locations;