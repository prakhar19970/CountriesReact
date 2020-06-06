import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Displaycountries extends Component {

    render(){
    return(
            this.props.displayResults.map((data, index) =>
                (  
                <div className={(data.length < 4 ? 'd-flex new-country-row' :'d-flex country-row' )}>        
                { data.map((cardData,index)=> (
                <div className={(data.length < 4 ? 'new-country-block' :"country-block" )}>
                <div className="country-flag-div"><img className="curved-corners" src={cardData.flag} alt="country flag"/></div>
                <Link to={`/country/${cardData.name}`} style={{ textDecoration: 'none', color:'hsl(200, 15%, 8%)'}}>
                <div className="country-details-div">
                <div className="country-name-title">
                <h6><b>{cardData.name}</b></h6>
                </div>
                <div>
                <div><b>Population:</b> {cardData.population}</div>
                <div><b>Region:</b> {cardData.region}</div>
                <div><b>Capital:</b> {cardData.capital}</div>
                </div>
                
                </div> 
                </Link>
            </div>
   ))}
</div>
    )))}
}

export default Displaycountries;