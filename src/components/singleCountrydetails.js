import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SingleCountry extends Component{
    componentDidMount(){
        this.getsingleCountry()
    }

    state={
        singleCountryData:''
    }

    getsingleCountry =() => {
        const countryName = this.props.match.params.name
        let getUrl = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`;
       
            return fetch(getUrl, {
            method: 'GET'
        }).then(data => {
            if (data.ok) {
                return data.json();
            }
        }).then(res => {
            console.log(res);
            // return res;
             this.setState({ singleCountryData: res})
        });  
    }
    render(){
        return(<div className="countries-outer-area">
        <button className="btn white-btn back-btn"><Link to='/'style={{ textDecoration: 'none', color:'hsl(200, 15%, 8%)'}}>Back</Link></button>
        <div className="d-flex">
            {console.log(this.state.singleCountryData)}
            <div>
                <img src={this.state.singleCountryData.flag} alt="country flag"/>
            </div>
            <div className="country-details-div">
            <div className="country-name-title">
                <h3><b>{this.state.singleCountryData.name}</b></h3>
                <div className="d-flex country-summary-div">
                    <div>
                <div><b>Native Name:</b> {this.state.singleCountryData.nativeName}</div>
                <div><b>Population:</b> {this.state.singleCountryData.population}</div>
                <div><b>Region:</b> {this.state.singleCountryData.region}</div>
                <div><b>Sub Region:</b> {this.state.singleCountryData.subregion}</div>
                <div><b>Capital:</b> {this.state.singleCountryData.capital}</div>
                </div>
                <div>
                    {/* <div><b>Top Level Domain:</b> {this.state.singleCountryData.topLevelDomain[0]}</div> */}
                    {/* <div><b>Currencies:</b> {this.state.singleCountryData.currencies[0].name}</div> */}
                    {/* <div><b>Languages:</b> {
                        this.state.singleCountryData.languages.map((lang,index)=>(
                        <span>{lang.name}</span>
                        )
                        )
                    }</div> */}
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>)
    }
}

export default SingleCountry;
