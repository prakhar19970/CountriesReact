import React, { Component } from 'react';
import CountriesHeader from './components/header'
import ShowCountries from "./components/showCountries"
import './App.css';

class CountriesApp extends Component {
  render(){
  return (
    <div className="countries-wrapper">
      <CountriesHeader/>
      <div className="countries-outer-area">
        <ShowCountries/>
      </div>
    </div>
  );
  }
}



export default CountriesApp;
