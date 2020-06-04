import React, { Component } from 'react'

class CountriesHeader extends Component {
render(){
return(
    <header className="countries-header">
        <div className="header-title">Where in the world?</div>
        <button className="btn dark-mode-btn"><span><i className="fa fa-moon-o" aria-hidden="true"></i> </span>Dark Mode</button>
    </header>
);
}
}


export default CountriesHeader