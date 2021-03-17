// @ts-ignore
import React from 'react';
import FetchCountries from '../Fetch-products/Fetch-products';
import Form from '../Input/Input';


const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Form />
        <FetchCountries />
      </div>
    </div>
  );
}

export default App;
