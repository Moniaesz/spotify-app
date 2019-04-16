import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      query: ''
     }
  }

  handleQueryChange = (query) => {
    this.setState({
      query: query
    })
  }

  render() { 

    const { getAlbums } = this.props;

    return ( 
      <React.Fragment>
        <h3 className="search__heading">Find your favourite albums!</h3>
        <form className="search__form">
          <input 
            className="input" 
            type="text" 
            placeholder="type album name"
            onChange={(event) => this.handleQueryChange(event.target.value)}
          />
          <input
            type="button"
            className="btn btn--search"
            value="search"
            onClick={()=>getAlbums(this.state.query)}
          /> 
        </form>
      </React.Fragment>
     );
  }
}
 
export default Search;