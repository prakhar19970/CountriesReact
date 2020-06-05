
import React, { Component } from 'react';
import SearchBar from "./searchBar";
import { render } from '@testing-library/react';
import Allcountries from './showAllCountries';
import Searchedcountries from './searchedCountry';

// import { Link } from 'react-router-dom'

class Showcountries extends Component {
   
    componentDidMount() {
        this.getallCountries()
    }

    state={
        countriesData: [],
        countriesStructureDataFrame:[],
        searchInput:""
    }
    renderDiv=()=>{
        let renderThis;
        const checkValue = this.state.searchInput;
       if(checkValue.length){
            // console.log(checkValue.length,"inside if")
        const filtercountry = this.state.countriesData.filter(country=>
            {
                return country.name.toLowerCase().includes(checkValue.toLowerCase())}) 
            //  console.log("---------->",this.reStructureData(filtercountry)); 

           renderThis= <Searchedcountries searchResults={this.reStructureData(filtercountry)}/>
       }
       else{
           renderThis= <Allcountries countriesStructureDataFrame={this.state.countriesStructureDataFrame} />
          }
    return renderThis;
    }
    searchCountry=(event)=>{
    // console.log(event.target.value);
        this.setState({searchInput:event.target.value})
    }

    reStructureData=(allcountriesData)=>{
        // console.log('allcountry----->',allcountriesData);
        let finalData=[];
        let countryRow=[];
        for(let country=0;country<allcountriesData.length;country++)
        {
            //console.log(countryRow);
            if(countryRow.length === 4)
            {
                finalData.push(countryRow);
                countryRow=[];
            }
            countryRow.push(allcountriesData[country]);
        }
        if(countryRow.length){
            finalData.push(countryRow);
        }
        // console.log("---finaldata--->",finalData);
        return finalData;
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
        // console.log(res);
        // return res;
         this.setState({ countriesData: res,
            countriesStructureDataFrame:this.reStructureData(res)})
    });  
}

render(){

    return(
        <div className="countries-outer-area">
           <SearchBar searchFunction={this.searchCountry} filterRegion={this.state.countriesData} />
            <div className="country-blocks-wrapper">
                {this.renderDiv()}
            </div>
        </div>
        )
         
    }

}

export default Showcountries;