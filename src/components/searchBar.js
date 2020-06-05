import React, { Component } from 'react';

const searchFeild= ()=>{
    return(
            <input type="text" name="search" className="countries-search-bar"/>
    )
}
const filterDropdown=()=>{
    return(
        <div class="dropdown">
        <button class="btn white-btn dropdown-toggle" type="button" data-toggle="dropdown">Filter
        <span class="caret"></span></button>
        <ul class="dropdown-menu">
        </ul>
        </div> 
    )
}

// class SearchBar extends Component {
//     render() {
//       return (
       
//       )
//     }
//   }

  export default SearchBar;