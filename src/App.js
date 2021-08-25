import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route path="/category/:id" render={ (props) => <Main { ...props } /> } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/product-details" component={ ProductDetails } />
          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
