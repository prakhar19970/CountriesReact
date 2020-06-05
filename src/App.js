import React, { Component } from 'react';
import CountriesHeader from './components/header'
import ShowCountries from "./components/showCountries"
// import SearchBar from "./components/searchBar"
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";

class CountriesApp extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="countries-wrapper">
      <CountriesHeader/>
      {/* <Switch> */}
        <ShowCountries/>
      {/* </Switch> */}
    </div>
    </BrowserRouter>
  );
  }
}



export default CountriesApp;
