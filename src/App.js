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
      albumDetails: null,
      query: ''
    }
  }

  // showAlbumDetails = () => {
  //   console.log('album details button clicked!');
  // }
  
  getAlbums = (query) => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
  
    this.setState({
      query
    })

    fetch(`https://api.spotify.com/v1/search?q=${query}&type=album`, {
      headers: {
        Authorization: `Bearer ${accessToken}` 
      }
    })
    .then((res) => res.json())
    .then((data) => 
      {
        this.setState({       
          albums: data.albums.items
        })
      }
    );
  }

  componentDidMount() {

    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    //fetch all albums that match the search query
    fetch(`https://api.spotify.com/v1/search?q=sade&type=album`, {
      headers: {
        Authorization: `Bearer ${accessToken}` 
      }
    })
    .then((res) => res.json())
    .then((data) => 
      {
        this.setState({       
          albums: data.albums.items
        })
      }
    );
    
    //fetch album details - with hardcoded album id
    fetch("https://api.spotify.com/v1/albums/0vNJ7P4dpArAiw5wBmsA3A/", {
      headers: {
        Authorization: `Bearer ${accessToken}` 
      }
    })
    .then((res) => res.json())
    .then((album) => 
      this.setState({
        albumDetails: album
      })
    );
  }

  render() {
    console.log(this.state.albums);
    console.log(this.state.albumDetails);

    return (
      <div className="App">
        <Header />
        <Search getAlbums={this.getAlbums}/>
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
