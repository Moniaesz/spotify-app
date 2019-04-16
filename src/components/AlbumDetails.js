import React, { Component } from 'react';
import playIcon from '../assets/play.svg';

class AlbumDetails extends Component {

  render() {
    const { albumDetails, hideAlbumDetails } = this.props;

    return (
      <React.Fragment>
        {albumDetails !== null &&
          <section className="album-details">
            <h3 className="album-details__heading">ALBUM DETAILS</h3>
              <button 
                className="album-details__close"
                onClick={hideAlbumDetails}>
                X
              </button>
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
                  style={{'fonStyle': 'italic', 'fontWeight': 'bold', 'marginTop': '2rem'}}>
                  Tracks in album:
                </li>
                <li 
                  className="album-details__item album-details__item--tracks">
                { albumDetails.tracks.items.map((track, index) => 
                  <ul key={index}className="tracks__list">
                    <a 
                      href={track.external_urls.spotify}
                      rel="noopener noreferrer"
                      target="_blank"
                      className='play__button'>
                      <img 
                        src={playIcon}
                        alt="icon to play the music demo"
                        className="play__icon">
                      </img>
                    </a>
                    <li className="tracks__item tracks__item--track-name">{track.name}</li>
                    <li className="tracks__item">{(track.duration_ms/1000/60).toFixed(2)} mins</li>
                  </ul>
                  )
                }
                </li>
              </ul>
          </section>    
        }
      </React.Fragment> 
    );
  }
}
 
export default AlbumDetails;