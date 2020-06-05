import React, { Component } from 'react';

class Allcountries extends Component {

    render(){
    return(
    this.props.countriesStructureDataFrame.map((data, index) =>
    (  
    <div className={(data.length < 4 ? 'd-flex new-country-row' :'d-flex country-row' )}>        
        { data.map((cardData,index)=> (
       <div id ={index} className={(data.length < 4 ? 'new-country-block' :"country-block" )}>
       <div className="country-flag-div"><img src={cardData.flag} alt="country flag"/></div>
       <div className="country-details-div">
       <div className="country-name-title">
       <h6><b>{cardData.name}</b></h6>
       </div>
       <div className="country-summary-div">
       <div><b>Population:</b> {cardData.population}</div>
       <div><b>Region:</b> {cardData.region}</div>
       <div><b>Capital:</b> {cardData.capital}</div>
       </div>
       </div>
   </div>
   ))}
</div>
    )))}
}

export default Allcountries;