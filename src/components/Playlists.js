import React, { Component } from 'react';

class Playlists extends Component {

  render() {
    
    const { showAlbumDetails, albums } = this.props;
    const albumDetails = this.props.albumDetails;

    console.log(albumDetails.items);
    
    return (
      <React.Fragment>
      {/* single album details */}
        <div>
          <ul>
            <li>Total score: {albumDetails.total}</li>
            {/* <li>
                {albumDetails.tracks.items.map((track) => 
                <p>{track.duration_ms}</p>
                )}
            </li> */}
            <li>tracks:
             {/* {Object.keys(albumDetails).length !== 0 && */}
             { albumDetails.items !== undefined &&
              albumDetails.items.map((track) => 
              <ul>
                <li>{track.duration_ms/1000/60}</li>
                {/* <li></li> */}
              </ul>
              )
             }

            </li>
            <li></li>
          </ul>
        </div>

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
                  onClick={showAlbumDetails}>
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