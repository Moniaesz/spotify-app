import React, { Component } from 'react';
import SingleAlbum from './SingleAlbum';
import AlbumDetails from './AlbumDetails';

class Albums extends Component {

  render() {
    
    const { showAlbumDetails, albums, hideAlbumDetails } = this.props;
    const albumDetails = this.props.albumDetails;
    
    return (
      <section className="albums">
        <AlbumDetails 
          albumDetails={albumDetails} 
          hideAlbumDetails={hideAlbumDetails}
        />
        <h4 className="albums__heading">Albums</h4>
        <div className="albums__wrapper">
          {albums.length !== 0 && albums.map(((singleAlbum) => (
            <SingleAlbum
              key={singleAlbum.id} 
              singleAlbum={singleAlbum}
              showAlbumDetails={showAlbumDetails}
            />
          )))}
        </div>
      </section> 
    )
  }
}
 
export default Albums;