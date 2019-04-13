import React, { Component } from 'react';

export default class Sort extends Component {
  state = {  }
  render() { 
    return (
      <section className="sort">
        <h4 className="sort__heading">Sort by:</h4>
        <button className="btn btn--sort btn--az">a-z</button>
        <button className="btn btn--sort">realase date</button>
      </section> 
      );
  }
}
 
