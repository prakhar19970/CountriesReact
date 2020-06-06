import React, { Component } from 'react';
import CountriesHeader from './components/header'
import ShowCountries from "./components/showCountries"
import Singlecountry from "./components/singleCountrydetails"
// import SearchBar from "./components/searchBar"
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";

class CountriesApp extends Component {
  render(){
  return (
    
    <div className="countries-wrapper">
      <CountriesHeader/> 
      <Switch>
      <Route path="/country/:name" component={Singlecountry} />
      <Route path="/" component={ShowCountries} exact />
      </Switch>
    </div>
  );
  }
}



export default CountriesApp;
