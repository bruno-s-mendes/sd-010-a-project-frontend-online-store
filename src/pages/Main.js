import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import CategoryFilter from '../components/CategoryFilter';
import ListItems from '../components/ListItems';
import * as api from '../services/api';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      input: '',
      list: [],
    };
    this.changeState = this.changeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  fetchAPI = async (id) => {
    let { category } = this.state;
    category = id;
    const { input } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(category, input);
    this.setState({
      list: response.results,
      category,
    });
  }

  changeState(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    const { input, list } = this.state;
    return (
      <div className="main-body">
        <CategoryFilter fetchAPI={ this.fetchAPI } className="side-category" />
        <div className="main-holder">
          <div className="main-header">
            <form onSubmit={ this.handleSubmit } className="main-header-form">
              <input
                data-testid="query-input"
                type="text"
                value={ input }
                onChange={ this.changeState }
                placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
                className="search-input"
              />
              <FaSearch
                type="submit"
                data-testid="query-button"
                onClick={ this.fetchAPI }
                className="search-btn"
              />
            </form>
            <Link
              data-testid="shopping-cart-button"
              to="/shopping-cart"
              className="shopping-cart"
            >
              <FaShoppingCart />
            </Link>
          </div>
          <ListItems list={ list } />
        </div>
      </div>

    );
  }
}

export default Main;
