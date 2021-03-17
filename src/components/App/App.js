// @ts-ignore
import React, { useState } from 'react';
import FetchCountries from '../Fetch-products/Fetch-products';
import Input from '../Input/Input';

// import axios
import axios from "axios";


const App = () => {


  return (
    <div className="app">
      <div className="container">
        {/* <Input /> */}
        <FetchCountries />
      </div>
    </div>
  );
}

export default App;
