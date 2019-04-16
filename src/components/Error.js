import React, { Component } from 'react';
import errorIllustration from '../assets/error.png';

export default function Error() {
  return (
    <div className="error">
      <h4 className="error__heading">Sorry, there was an error. Make sure that your album name is correctly spelled and your query is no empty!
      </h4>
      <img 
        src={errorIllustration}
        alt="illustration with error message"
        className="error__img"
        >
      </img>
    </div>
  )
}