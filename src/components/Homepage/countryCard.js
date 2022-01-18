import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { Link } from "react-router-dom";
class Countrycard extends Component {
    render() {
        return (
            this.props.displayResults.map((data, index) =>
            (
                <div className={(data.length < 4 ? 'new-country-row' : 'country-row')}>

                    {data.map((cardData, index) => {
                        return (
                            <Link to={`/countries/${cardData.alpha3Code}`} style={{ textDecoration: 'none', color: (this.props.darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)') }} className={(data.length < 4 ? (this.props.darkMode ? 'dark-mode-element  dark-shadow  new-country-block' : 'new-country-block') : (this.props.darkMode ? 'dark-mode-element  dark-shadow country-block' : "country-block"))}>
                                <div id={cardData.callingCodes}>
                                    <div className="country-flag-div"><img className="curved-corners" src={cardData.flag} alt="country flag" /></div>

                                    <div className="country-details-div">
                                        <div className="country-name-title">
                                            <h6><b>{cardData.name}</b></h6>
                                        </div>
                                        <div>
                                            <NumberFormat value={cardData.population} displayType={'text'} thousandSeparator={true} renderText={value => <div><b>Population:</b> {value}</div>} />
                                            <div><b>Region:</b> {cardData.region}</div>
                                            <div><b>Capital:</b> {cardData.capital}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>);
                    })}
                </div>)))
    }
}

export default Countrycard;