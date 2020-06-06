
import React, { Component } from 'react';
import SearchBar from "./searchBar";
import { render } from '@testing-library/react';
import Displaycountries from './displayCountries';
// import Searchedcountries from './searchedCountry';
// import { Link } from 'react-router-dom'

class Showcountries extends Component {
   
    componentDidMount() {
        this.getallCountries()
    }

    state={
        countriesData: [],
        countriesStructureDataFrame:[],
        searchInput:"",
        regionSelected:""
    }

    renderDiv=()=>{
        let renderThis;
        const countryName = this.state.searchInput;
        const regionName = this.state.regionSelected;
       if(countryName.length){
       const filtercountry = this.state.countriesData.filter(country=>
            {
                return country.name.toLowerCase().includes(countryName.toLowerCase())}) 
           renderThis= <Displaycountries displayResults={this.reStructureData(filtercountry)}/>
       }
       else if(regionName.length){
        const filterRegion= this.state.countriesData.filter(country=>
            {

                return country.region.toLowerCase() === regionName.toLowerCase()}) 
            //  console.log("---------->",this.reStructureData(filtercountry)); 

           renderThis= <Displaycountries displayResults={this.reStructureData(filterRegion)}/>
       }
       else{
           renderThis= <Displaycountries displayResults={this.state.countriesStructureDataFrame} />
          }
    return renderThis;
    }
    searchCountry=(event)=>{
    // console.log(event.target.value);
        this.setState({searchInput:event.target.value})
    }

    filterRegion=(event)=>{
         console.log(event.target.value);
            this.setState({regionSelected:event.target.value})
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

regionShard=(data)=>{
    let temp=[];
    data.map((e,x)=>(
        temp.push(e.region)))
     let newdata=[...new Set(temp)]
     return newdata;
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
         this.setState({ countriesData: res,
            countriesStructureDataFrame:this.reStructureData(res)})
    });  
}

render(){

    return(
        <div className="countries-outer-area">
           <SearchBar searchFunction={this.searchCountry} filterRegionData={this.regionShard(this.state.countriesData)} filterFunction={this.filterRegion} />
            <div className="country-blocks-wrapper">
                {this.renderDiv()}
            </div>
        </div>
        )
         
    }

}

export default Showcountries; 
