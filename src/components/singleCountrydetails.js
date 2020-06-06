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
            // console.log(res);
            // return res;
             this.setState({ singleCountryData: res})
        });  
    }
    render(){
        return(<div className="countries-outer-area">
        <button className="btn white-btn back-btn"><Link to='/'style={{ textDecoration: 'none', color:'hsl(200, 15%, 8%)'}}>Back</Link></button>
        </div>)
    }
}

export default SingleCountry;
