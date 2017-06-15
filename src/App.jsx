import React, { Component } from 'react';
import logo from './logo.svg';
import FilterableProductTable from './filterableproducttable';
import './App.css';
import PRODUCTS from './data'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="container">
        <FilterableProductTable products={PRODUCTS}/>
        </div>
      </div>
    );
  }
}

export default App;
