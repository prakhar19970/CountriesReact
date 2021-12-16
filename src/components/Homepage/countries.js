
import React, { Component } from 'react';
import SearchBar from "./searchBar";
import Countrycard from './countryCard';
class Countries extends Component {

    componentDidMount() {
        this.getallCountries()
    }

    state={
        countriesData: [],
        countriesStructureDataFrame:[],
        searchInput:"",
        regionSelected:"",
    }

    renderDiv=()=>{
        let renderThisComponent;
        const countryName = this.state.searchInput;
        const regionName = this.state.regionSelected;
       if(countryName.length && regionName.length){

       const filtercountry = this.state.countriesData.filter(country=>
            {
                 return country.name.toLowerCase().includes(countryName.toLowerCase()) && country.region.toLowerCase() === regionName.toLowerCase()}) 
           renderThisComponent= <Countrycard displayResults={this.reStructureData(filtercountry)} darkMode={this.props.darkMode}/>
       }
       else if(countryName.length){
        const filtercountry = this.state.countriesData.filter(country=>
            {
                return country.name.toLowerCase().includes(countryName.toLowerCase());
            })
            renderThisComponent= <Countrycard displayResults={this.reStructureData(filtercountry)} darkMode={this.props.darkMode}/>
       }
       else if(regionName.length){
        const filterRegion= this.state.countriesData.filter(country=>
            {

                return country.region.toLowerCase() === regionName.toLowerCase()}) 
            renderThisComponent= <Countrycard displayResults={this.reStructureData(filterRegion)} darkMode={this.props.darkMode}/>
       }
       else{
        renderThisComponent= <Countrycard displayResults={this.state.countriesStructureDataFrame} darkMode={this.props.darkMode} />
          }
    return renderThisComponent;
    }

    searchCountry=(event)=>{
        this.setState({searchInput:event.target.value})
    }

    filterRegion=(event)=>{
            this.setState({regionSelected:event.target.value})
        }

    reStructureData=(allcountriesData)=>{
        let finalData=[];
        let countryRow=[];
        for(let country=0;country<allcountriesData.length;country++)
        {
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
        return finalData;
    }

    regionShard=(regions)=>{
        let regionContainer=[];
        regions.map((regionData,index)=>{
            if(regionData.region !== '' && !(regionContainer.includes(regionData.region))){
            regionContainer.push(regionData.region)}
            return regionContainer;
        })
        return regionContainer;
    }

    getallCountries =() => {
        let getUrl = `https://restcountries.com/v2/all?fields=name,population,region,capital,flag,alpha3Code`;
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
        <div className={this.props.darkMode ? "dark-background countries-outer-area":"countries-outer-area"}>
           <SearchBar searchFunction={this.searchCountry} filterRegionData={this.regionShard(this.state.countriesData)} filterFunction={this.filterRegion} darkMode={this.props.darkMode}/>
            <div className="country-blocks-wrapper">
                {this.renderDiv()}
            </div>
        </div>
        )
         
    }

}

export default Countries; 
