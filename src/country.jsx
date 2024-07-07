import React, { useEffect, useState } from "react";
import axios from 'axios';
import './country.css';

function Country(){
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                let slicedCountries = response.data.slice(0, 100)
                setCountries(slicedCountries);
                console.log(response);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="country-container">
            <h1>Countries with common name, capital & it's population</h1>
            <ol className="country-list">
                    {countries.map(country => (
                        <li key={country.cca3} className="country-item">
                            <div>
                                <img src={country.flags.png} alt={country.name.common} />
                                <h3>{country.name.common}</h3>
                                <p>Capital: <b>{country.capital}</b></p>
                                <p>Population: {country.population}</p>
                                
                            </div>
                        </li>
                    ))}
                </ol>
        
        </div>
    );
}

export default Country;
