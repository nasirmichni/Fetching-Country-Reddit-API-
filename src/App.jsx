import React from 'react';
import Api from './weather';
import Country from './country';
// import Currency from './currency';
import Reddit from './reddit';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="currency-top">
        {/* <Currency /> */}
      </div>
      <div className="full-width">
        <Country />
      </div>
      <div className="full-width">
        <Reddit />
      </div>
      <div className="full-width">
        <Api />
      </div>
    </div>
  );
}

export default App;
