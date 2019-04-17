import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Search from './components/Search';
import Sort from './components/Sort';
import Playlists from './components/Playlists';
import Error from './components/Error';
import MountError from './components/MountError';
import queryString from 'query-string';

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      albums: [],
      albumDetails: null,
      query: '',
      error: '',
      mountError: ''
    }
  }
  
  //sort albums alphabetically
  sortAZ = (albums) => {
    albums = this.state.albums;
    this.setState({
      albums: albums.sort((a,b) => (a.name < b.name ? -1 : 1))
    })
  }

  //sort albums by release date
  sortByDate = (albums) => {
    albums = this.state.albums;
    this.setState({
      albums: albums.sort((a,b) => (a.release_date > b.release_date ? -1 : 1))
    })
  }

  // show details of chosen album
  showAlbumDetails = (albumId) => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;    

      fetch(`https://api.spotify.com/v1/albums/${albumId}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}` 
          }
        })
        .then((res) => res.json())
        .then((album) => 
          this.setState({
            albumDetails: album
          })
        )
  }
  
  //get albums based of user's query value
  getAlbums = (query) => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
  
    this.setState({
      query,
      error: ''
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
    )
    .catch(error => {
      this.setState({
        error: error
      })
    });
  }

  //hide album details
  hideAlbumDetails = () => {
    this.setState({
      albumDetails: null
    })
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    fetch(`https://api.spotify.com/v1/search?q=daria%20zawiałow&type=album`, {
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
    )
    .catch(error => {
      this.setState({
        mountError: error
      })
    });
  }

  render() {
    console.log(this.state.albums);

    return (
      <div className="App">
        <Header />
        {this.state.error && <Error />}
        {this.state.mountError && <MountError />}
        <Search getAlbums={this.getAlbums}/>
        <Sort 
          sortAZ={this.sortAZ} 
          sortByDate={this.sortByDate}
        />
        <Playlists 
          albums={this.state.albums}
          showAlbumDetails={this.showAlbumDetails}
          albumDetails={this.state.albumDetails}
          hideAlbumDetails={this.hideAlbumDetails}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
