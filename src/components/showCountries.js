
import React, { Component } from 'react';
import { render } from '@testing-library/react';

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
        console.log('its here ');
        let renderThis;
        const checkValue = this.state.searchInput;
       if(checkValue.length){
        //    console.log(checkValue.length,"inside if")
           renderThis= <div></div>
          const filtercountry= this.state.countriesData.filter(country=>
            {return country.name.toLowerCase().includes(checkValue.toLowerCase())}) 
           console.log(filtercountry);  
       }
       else{
           renderThis= 
           this.state.countriesStructureDataFrame.map((data, index) =>
           (
              
          <div className='d-flex country-row'>
              { data.map((cardData,index)=> (
                  <div id ={index} className="country-block">
                  <div className="country-flag-div"><img src={cardData.flag} alt="country flag"/></div>
                  <div className="country-details-div">
                  <div className="country-name-title">
                  <h6><b>{cardData.name}</b></h6>
                  </div>
                  <div className="country-summary-div">
                  <div><b>Population:</b> {cardData.population}</div>
                  <div><b>Region:</b> {cardData.region}</div>
                  <div><b>Capital:</b> {cardData.capital}</div>
                  </div>
                  </div>
              </div>
              ))}
          </div>
       ))}
    return renderThis;
    }
    searchCountry=(event)=>{
// console.log(event.target.value);
        this.setState({searchInput:event.target.value})
    }

    reStructureData=(allcountriesData)=>{
        let finalData=[];
        let countryRow=[];
        for(let country=0;country<allcountriesData.length;country++)
        {
            // console.log(res[i]);
            if((country+1)%5 !== 0)
            {
                countryRow.push(allcountriesData[country]);
            }
            else
            {
                finalData.push(countryRow);
                countryRow=[];
            }  
        }
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
            <div className="d-flex search-wrapper" >
                {/* <searchFeild/> */}
                <input type="text" name="search" className="countries-search-bar" onChange={this.searchCountry}/>
                <div className="dropdown">
                <button className="btn white-btn dropdown-toggle" type="button" data-toggle="dropdown">Region
                <span className="caret"></span></button>
                  <ul className="dropdown-menu">
                </ul>
                </div> 
                {/* <filterDropdown/> */}
            </div>
      {/* <div >
           {  */}
            <div className="country-blocks-wrapper">
                {this.renderDiv()}
            </div>
        {/* //  }
        // </div> */}
        </div>
        )
         
    }

}

export default Showcountries;