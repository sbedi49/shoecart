import React from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="/checkout">
        <Checkout />
      </Route>

      <Route path ="/">
         <Header />
        <Products />
      </Route>
      </Switch>
    </div>
    </Router>
  )
  }
export default App;
