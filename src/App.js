import React, { Component } from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import Locations from './components/Locations';
import Episodes from './components/Episodes';
import './App.css';

const api = "https://rickandmortyapi.com/api/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: { info: {}, results: [] },
      location: { info: {}, results: [] },
      episode: { info: {}, results: [] },
      // isLoaded: false
      pageName: 'character/'
    };
    this.loadCharacters = this.loadCharacters.bind(this);
    this.loadEpisodes = this.loadEpisodes.bind(this);
    this.loadLocations = this.loadLocations.bind(this);
    this.loadNext = this.loadNext.bind(this);
    this.loadPrev = this.loadPrev.bind(this);
  }

  loadCharacters() {
    this.setState({ pageName: 'character/' });
    fetch(api + 'character/').then(result => result.json()).then(data => {
      this.setState({
        character: data,
        // isLoaded: true
      });
      console.log(data);
    })
      .catch(err => console.log(err));
  }


  loadLocations() {
    this.setState({ pageName: 'location' })
    fetch(api + 'location').then(result => result.json()).then(data => {
      this.setState({ location: data });
      console.log(data);
    })
      .catch(err => console.log(err));
  }


  loadEpisodes() {
    this.setState({ pageName: 'episode' })
    fetch(api + 'episode').then(result => result.json()).then(data => {
      this.setState({ episode: data });
      console.log(data);
    })
      .catch(err => console.log(err));
  }

  getPage() {
    switch (this.state.pageName) {
      case 'character/':
        return <Characters
          userData={this.state.character}
          loadMore={(this.loadMore)} />;
      case 'location':
        return <Locations
          locationData={this.state.location}
          loadMore={(this.loadMore)} />;
      case 'episode':
        return <Episodes
          episodeData={this.state.episode}
          loadMore={(this.loadMore)} />;
    }
  }

  loadNext() {
    const page = this.state.pageName.replace('/', '');
    fetch(this.state[page].info.next).then(result => result.json()).then(data => {
      this.setState({[page]: data})
    })
  }

  loadPrev() {
    const page = this.state.pageName.replace('/', '');
    fetch(this.state[page].info.prev).then(result => result.json()).then(data => {
      this.setState({[this.state.pageName.replace('/', '')]: data})
    })
  }


  render() {
    return (
      <>
        <Header getCharacters={(this.loadCharacters)}
          getLocations={this.loadLocations}
          getEpisodes={this.loadEpisodes}
          loadNext={this.loadNext}
          loadPrev={this.loadPrev} />

        {this.getPage()}
      </>
    );
  }
}

export default App;
