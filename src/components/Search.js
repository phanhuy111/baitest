import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }



  // isChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value
  //   this.setState({
  //     [name]: value
  //   });
  // }

  // onSearch2 = (i) => {
  //   this.props.onSearch(i)
  // }

  render() {
    // const { key } = this.state;
    return (
      <div className="all-search">
        <input
          type="text"
          name="quantity"
          id="search_tern"
          required=""
          className="search_box ui-search-field"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Tìm kiếm" />
      </div>
    );
  }
}

export default Search;