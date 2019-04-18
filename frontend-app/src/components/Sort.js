import React, { Component } from 'react';

export default class Sort extends Component {
  state = {  }
  render() { 

    const { sortAZ, sortByDate } = this.props;

    return (
      <section className="sort">
        <h4 className="sort__heading">Sort albums by:</h4>
        <div className="sort__buttons ">
          <button 
            className="btn btn--sort btn--az"
            onClick={sortAZ}
            >a-z
          </button>
          <button 
            className="btn btn--sort"
            onClick={sortByDate}
            >realase date
          </button>
        </div>
      </section> 
      );
  }
}
 
