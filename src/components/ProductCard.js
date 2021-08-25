import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    const { item, itemId } = this.props;

    return (
      <div className="card-body">
        <Link
          data-testid="product-detail-link"
          to={ { pathname: '/product-details', itemCard: item, itemId } }
          className="card-link"
        >
          <div data-testid="product" className="card-upper">
            <h4 className="card-title">{ item.title }</h4>
            <img src={ item.thumbnail } alt="imágem do produto" className="card-img" />
            <p className="card-price">{ `R$ ${item.price}` }</p>
          </div>
        </Link>
        <AddToCart item={ item } classId="product-add-to-cart" />
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  itemId: PropTypes.string.isRequired,
};

export default ProductCard;
