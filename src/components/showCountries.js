
import React, { Component } from 'react';

// import { Link } from 'react-router-dom'

class Showcountries extends Component {
    
    componentDidMount() {
        this.getallCountries()
    }

    state={
        countriesData: [],


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
        let finalData=[];
        let temp=[];
        for(let i=0;i<res.length;i++)
        {
                // console.log(res[i]);
                if((i+1)%5 !== 0)
                {
                    temp.push(res[i]);
                }
                else
                {
                    finalData.push(temp);
                    temp=[];
                }  
        }
        console.log(finalData);
         this.setState({ countriesData: finalData })
    });
}
render(){

    return(
            this.state.countriesData.map((data, index) =>
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
                ))
                }
            </div>
         )))
         
    }

}

export default Showcountries;