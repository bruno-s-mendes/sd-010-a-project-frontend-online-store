import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={ (props) => <Main { ...props } /> } />
        <Route path="/category/:id" render={ (props) => <Main { ...props } /> } />
        <Route exact path="/shopping-cart" render={ (props) => <ShoppingCart { ...props } /> } />
        <Route exact path="/product-details" render={ (props) => <ProductDetails { ...props } /> } />
        <Route exact path="/checkout" render={ (props) => <Checkout { ...props } /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
