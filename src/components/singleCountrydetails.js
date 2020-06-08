import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { Link,Switch } from "react-router-dom";

class SingleCountry extends Component{
    
    componentDidMount(){
        this.getsingleCountry() 
    }
    
    state={
        singleCountryData:[],
        currencies: [],
        topLevelDomain:[],
        borderCodes:[],
        borderCountries:[],
        languages:[],
        countriesData:[]
    }

    borderCountryfilter =()=>{
        let filterCode=[];
            this.state.borderCodes.map((border,index)=>(
                //console.log(border)
            filterCode.push(this.state.countriesData.filter(country=>
               {return country.alpha3Code === border})   
            )
            ))
        this.setState({borderCountries:filterCode});
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
             this.setState({ countriesData: res})
             this.borderCountryfilter();
        });
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
            const country=res[0];
             this.setState({ singleCountryData: country,
                currencies:country.currencies,
            topLevelDomain:country.topLevelDomain,
            languages:country.languages,
            borderCodes:country.borders})
             this.getallCountries() 
        })
    }

    redirectToBorder = (country) => {
        const { history } = this.props;
        if(history) 
        {
            history.push(`/${country}`);
        }
    }

    render(){
        
        return(
            <div className={this.props.darkMode?"country-deatils-wrapper dark-background":"country-deatils-wrapper"}>
            <Link to='/'style={{ textDecoration: 'none', color:'hsl(200, 15%, 8%)'}}><button className={this.props.darkMode? "btn white-btn back-btn dark-mode-element dark-shadow" :"btn white-btn back-btn"}>
            <i className="fa fa-long-arrow-left fa-sm"> </i>
            Back</button></Link>
            {
                <div className="country-details-outer">
                <div id={this.state.singleCountryData.callingCodes} className="country-details-container">  
            <div className="country-details-flag">
                <img src={this.state.singleCountryData.flag} alt="country flag"/>
            </div>
            <div className="country-details-outer-block">
            <div className="country-name-title">
                <h3><b>{this.state.singleCountryData.name}</b></h3>
            </div>
            <div className="country-summary-div">
                <div className="summary-left-inner-div">
                    <div><b>Native Name:</b> {this.state.singleCountryData.nativeName}</div>
                    <NumberFormat value={this.state.singleCountryData.population} displayType={'text'} thousandSeparator={true} renderText={value => <div><b>Population:</b> {value}</div>} />
                    <div><b>Region:</b> {this.state.singleCountryData.region}</div>
                    <div><b>Sub Region:</b> {this.state.singleCountryData.subregion}</div>
                    <div><b>Capital:</b> {this.state.singleCountryData.capital}</div>
                </div>
                <div className="summary-right-inner-div">
                    <div><b>Top Level Domain:</b> {this.state.topLevelDomain.map((domain,index)=>(
                    <span id={index}>{domain}</span>))}
                    </div>
                    <div><b>Currencies:</b> { this.state.currencies.map((currency,index)=>(
                    <span id={index}>{currency.name}</span>))}</div>
                    <div><b>Languages:</b> {
                        this.state.languages.map((lang,index)=>(
                            <span>{ index+1 === this.state.languages.length? lang.name : lang.name+', ' }</span>))}
                    </div>
                </div>
                </div>
                <div className={this.state.borderCountries.length ? 'border-country-wrapper':'d-none'}>
                        <div className="d-flex border-area"><b>Border Countries:</b></div>
                        <div className="d-flex border-country-buttons">{this.state.borderCountries.map((borderCountry,index)=>(
                            borderCountry.map((cardData,index)=> (
                                <Link to={`/${cardData.name}`} style={{ textDecoration: 'none', color:(this.props.darkMode ?'hsl(0, 0%, 100%)':'hsl(200, 15%, 8%)')}}
                                className={this.props.darkMode? "btn white-btn border-btn dark-mode-element dark-shadow":"btn white-btn border-btn"}>
                                <div>{cardData.name}</div></Link>
                            ))
                        ))}</div>
                        </div>
            </div>
               </div>
        </div>}
        </div>
        )
}
}

export default SingleCountry;

