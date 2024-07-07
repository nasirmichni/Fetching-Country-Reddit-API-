import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './currency.css'

function Currency() {
    const [currency, setCurrency] = useState(null);

    useEffect(() => {
        axios.get('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=77482e2515c54b6cb0695e53e9947d78')
            .then(response => {
                let rates = {};
                for (let currencyCode in response.data.rates) {
                    rates[currencyCode] = Number(response.data.rates[currencyCode]);
                }
                setCurrency(rates);
                console.log(rates);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

   if(!currency){
    return null;
   }
   return (
    <div>
      <h2>Currency Rates</h2>
      <div className="currency"> {/* Single container within the grid */}
        {Object.keys(currency).map((currencyCode, index) => (
          <span key={index} className="currency-list-item"> {/* Use span instead of li */}
            {currencyCode} : {currency[currencyCode].toFixed(2)}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Currency;
