import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem = () => {
    let cart = [];
    const { item } = this.props;
    if (localStorage.getItem('item') !== null) {
      cart = JSON.parse(localStorage.getItem('item'));
      cart.push(item);
    } else {
      cart.push(item);
    }
    localStorage.setItem('item', JSON.stringify(cart));
  }

  render() {
    const { classId } = this.props;
    return (
      <button
        type="button"
        data-testid={ classId }
        onClick={ () => this.addItem() }
        className="card-add-to-cart"
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddToCart.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  classId: PropTypes.string.isRequired,
};
