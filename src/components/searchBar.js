import React, { Component } from 'react';

class SearchBar extends Component {

    render(){
    return(
        <div className="d-flex search-wrapper" >
        <input type="text" name="search" className="countries-search-bar" onChange={this.props.searchFunction}/>
        <div className="dropdown">
        {/* <label >Region
        </label> */}
          <select className="btn btn-secondary" >
            {this.props.filterRegion.map((data,index)=>(
                 <option value={data.region} onSelect={this.props.filterFunction}>{data.region}</option>
            ))
            }
        </select>
        </div>
     </div>
    )
    }
}


  export default SearchBar;