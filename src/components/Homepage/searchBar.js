import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
      <div className="d-flex search-wrapper" >
        <div className={this.props.darkMode ? "dark-mode-element input-area  dark-shadow " : "input-area"}>
          <i className='fa fa-search fa-sm'></i>
          <input type="text" name="search" className={this.props.darkMode ? "dark-mode-element countries-search-bar" : "countries-search-bar"} onChange={this.props.searchFunction} placeholder='Search for a country...' />
        </div>
        <div className="dropdown">
          <select className={this.props.darkMode ? "btn white-btn dark-mode-element" : "btn white-btn"} onChange={this.props.filterFunction}>
            <option className="btn white-btn" value='' style={{ textAlign: 'left' }}>Region</option>
            {this.props.filterRegionData.map((data, index) => (
              <option value={data}>{data}</option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}


export default SearchBar;