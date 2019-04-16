import React, { Component } from 'react';

class Playlists extends Component {

  render() {
    
    const { showAlbumDetails, albums } = this.props;
    const albumDetails = this.props.albumDetails;

    console.log(albumDetails);
    
    return (
      <React.Fragment>
      {/* single album details */}
      {albumDetails !== null &&
        <section className="album-details">
          <h3 className="album-details__heading">ALBUM DETAILS</h3>
            <ul className="album-details__list">            
              <li 
                className="album-details__item album-details__title">
                Full album length:
                  <span className="album-details__span">
                    { 
                    (albumDetails.tracks.items.reduce((prevValue, currentValue) => prevValue + currentValue.duration_ms, 0)/1000/60).toFixed(2)
                    }
                  </span>
                 mins   
              </li>
              <li 
                className="album-details__item album-details__title">
                Popularity rank:
                  <span className="album-details__span">{albumDetails.popularity}</span>
              </li>
              <li 
                className="album-details__item album-details__title" 
                style={{'font-style': 'italic', 'font-weight': 'bold', 'margin-top': '2rem'}}>
                Tracks in album:
              </li>
              <li 
                className="album-details__item album-details__item--tracks">
              { albumDetails.tracks.items.map((track) => 
                <ul className="tracks__list">
                  <li className="tracks__item tracks__item--track-name">{track.name}</li>
                  <li className="tracks__item">{(track.duration_ms/1000/60).toFixed(2)} mins</li>
                </ul>
                )
              }
              </li>
              <li></li>
            </ul>
        </section>    
      }

        <h4 className="albums__heading">Albums</h4>
        <div className="albums__wrapper">
          {albums.length !== 0 && albums.map(((singleAlbum, index) => 
              <ul className="albums__single-album single-album__list">
              <img 
                className="album__img" 
                src={singleAlbum.images[0].url}
                alt={singleAlbum.name}>
              </img>
                <li 
                  className="single__album__item single__album-name">
                  {singleAlbum.name}
                </li>
                <li 
                  className="single__album__item single__album-artist">
                  {singleAlbum.artists[0].name}
                </li>
                <li
                  className="single__album__item">
                  {singleAlbum.release_date}
                </li>
                <li
                  className="single__album__item">
                  {singleAlbum.total_tracks} tracks
                </li>
                <button 
                  className="btn btn--album-details"
                  onClick={()=>showAlbumDetails(singleAlbum.id)}>
                  album details
                </button>
              </ul>
            ))}
        </div>
      </React.Fragment> 
      )
  }
}
 
export default Playlists;