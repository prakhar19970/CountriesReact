import React, { Component } from 'react';
import CountriesHeader from './components/header'
import ShowCountries from "./components/showCountries"
import Singlecountry from "./components/singleCountrydetails"
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";

class CountriesApp extends Component {
 
    componentDidMount(){
      if(sessionStorage.getItem("mode") === 'dark'){
        this.setState({darkMode:true});
        //this.props.appContainer.style.backgroundColor= "hsl(207, 26%, 17%)";
      }
      else{
        this.setState({darkMode:false})
        // this.props.appContainer.style.backgroundColor= "hsl(0, 0%, 98%)";
      }
    }
      state={
        darkMode:''
      }
    modeStatus=()=>{
        if(sessionStorage.getItem("mode") === 'dark'){
            sessionStorage.setItem("mode", 'light');
            this.setState({darkMode:false});       
        }
        else{
            sessionStorage.setItem("mode", 'dark');
            this.setState({darkMode:true});   
        }

    }

  render(){
    
  return (
    <BrowserRouter>
    <div className="countries-wrapper">
      <CountriesHeader mode={this.modeStatus} darkMode={this.state.darkMode} /> 
      </div>
      <Switch>
      <Route exact path="/:name" render={(props) => <Singlecountry {...props} darkMode={this.state.darkMode}  key={window.location.pathname}/>}/>
      <Route path="/" render={(props) => <ShowCountries {...props} darkMode={this.state.darkMode} />} exact />
      </Switch>
    </BrowserRouter>
  );
  }
}



export default CountriesApp;
