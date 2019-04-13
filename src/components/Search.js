import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <React.Fragment>
        <h3 className="search__heading">Find your favourite albums!</h3>
        {/* <form> */}
          <input className="input" type="text" placeholder="type album name"/>
          <button className="btn btn--search">search</button>
        {/* </form> */}
      </React.Fragment>
     );
  }
}
 
export default Search;