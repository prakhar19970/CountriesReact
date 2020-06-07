import React, { Component } from 'react'

class CountriesHeader extends Component {

    render(){
    return(
    <header className={this.props.darkMode? "dark-mode-element countries-header":"countries-header"}>
        <div className="header-title">Where in the world?</div>
        <button className={this.props.darkMode? "dark-mode-element btn white-btn":"btn white-btn"} onClick={this.props.mode}><span><i className="fa fa-moon-o" aria-hidden="true"></i> </span>Dark Mode</button>
    </header>
);
}
}


export default CountriesHeader