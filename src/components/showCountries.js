
import React, { Component } from 'react';

// import { Link } from 'react-router-dom'

class Showcountries extends Component {
    
    componentDidMount() {
        this.getallCountries()
    }

    state={
        countriesData: []
    }

 getallCountries =() => {
    let getUrl = `https://restcountries.eu/rest/v2/all`;
    return fetch(getUrl, {
        method: 'GET'
    }).then(data => {
        if (data.ok) {
            return data.json();
        }
    }).then(res => {
        console.log(res);
        // return res;
        this.setState({ countriesData: res })
    });
}
render(){
    return(<div className="countries-outer-area">
        {
         this.state.countriesData.map((data, index) => (
            <div className="country-block">
                <div className="country-flag-div"><img src={data.flag} alt="country flag"/></div>
                <div>
                    <div className="country-name-title">
                    <h6>{data.name}</h6>
                    </div>
                    <div className="country-summary-div">
                    <p>Population : {data.population}</p>
                    <p>Region : {data.region}</p>
                    <p>Capital : {data.capital}</p>
                    </div>
                </div>
            </div>
         ))}
         </div>)
    }

}

export default Showcountries;