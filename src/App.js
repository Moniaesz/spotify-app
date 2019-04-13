import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Search from './components/Search';
import Sort from './components/Sort';
import Playlists from './components/Playlists'
import queryString from 'query-string';


class App extends Component {
  constructor(props) {
    super()

    this.state = {
      albums: [],
      albumDetails: {}
    }
  }

  showAlbumDetails = () => {
    console.log('album details button clicked!');
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    //fetch all albums that match the search query
    fetch("https://api.spotify.com/v1/search?q=sade&type=album", {
      headers: {
        Authorization: "Bearer" 
      }
    })
    .then((res) => res.json())
    .then((data) => 
      this.setState({
        albums: data.albums.items
      })
    );

    fetch("https://api.spotify.com/v1/albums/0vNJ7P4dpArAiw5wBmsA3A/tracks", {
      headers: {
        Authorization: "Bearer"
      }
    })
    .then((res) => res.json())
    .then((album) => 
      this.setState({
        albumDetails: album
      })
    );
  }

  // componentDidMount() {
  //   fetch("https://api.spotify.com/v1/search?q=sade&type=album", {
  //     headers: {
  //       Authorization: "Bearer" 
  //     }
  //   })
  //   .then((res) => res.json())
  //   .then((albums) => console.log(albums));
  // }


  render() {
    console.log(this.state.albums);
    console.log(this.state.albumDetails);

    return (
      <div className="App">
        <Header />
        <Search />
        <Sort />
        <Playlists 
          albums={this.state.albums}
          showAlbumDetails={this.showAlbumDetails}
          albumDetails={this.state.albumDetails}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
