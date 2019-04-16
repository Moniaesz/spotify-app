import React, { Component } from 'react';
import coverPlaceholder from '../assets/headphones.png';

class SingleAlbum extends Component {
  render () {

    const { singleAlbum, showAlbumDetails } = this.props;

    return (
      <React.Fragment>
        <ul className="albums__single-album single-album__list">
          <img 
            className="album__img" 
            src={(!singleAlbum.images || singleAlbum.images.length === 0) 
            ? coverPlaceholder 
            : singleAlbum.images[0].url}
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
      </React.Fragment>
    )
  }
}

export default SingleAlbum;
