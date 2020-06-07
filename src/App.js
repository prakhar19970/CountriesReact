import React, { Component } from 'react';
import CountriesHeader from './components/header'
import ShowCountries from "./components/showCountries"
import Singlecountry from "./components/singleCountrydetails"
// import SearchBar from "./components/searchBar"
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";

class CountriesApp extends Component {
 
  componentDidMount(){
    this.modeStatus()
  }

    state={
      darkMode:''
    }
modeStatus=()=>{
//   console.log('yes it here ');
    if(sessionStorage.getItem("mode") === 'dark'){
        sessionStorage.setItem("mode", 'light');
        this.setState({darkMode:false});  
        this.props.appContainer.style.backgroundColor= "hsl(0, 0%, 98%)";    
    }
    else{
        sessionStorage.setItem("mode", 'dark');
        this.setState({darkMode:true});
        this.props.appContainer.style.backgroundColor= "hsl(207, 26%, 17%)";
    }

}

  render(){
    
  return (
    
    <div className="countries-wrapper">
      <CountriesHeader mode={this.modeStatus} darkMode={this.state.darkMode} /> 
      <Switch>
      <Route path="/country/:name" render={(props) => <Singlecountry {...props} darkMode={this.state.darkMode} />}/>
      <Route path="/" render={(props) => <ShowCountries {...props} darkMode={this.state.darkMode} />} exact />
      </Switch>
    </div>
  );
  }
}



export default CountriesApp;
