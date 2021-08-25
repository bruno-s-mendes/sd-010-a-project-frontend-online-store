import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import AddToCart from '../components/AddToCart';
import Form from '../components/Form/Form';
import '../components/Form/Form.css';
import './ProductDetails.css';

class ProductDetails extends Component {
  render() {
    const { location: { itemCard, itemId } } = this.props;
    const { title, price, thumbnail } = itemCard;
    return (
      <div className="details-body">
        <div className="details-header">
          <Link to="/" className="details-header-back">
            <FaArrowLeft />
          </Link>
          <Link to="/shopping-cart" className="details-header-cart">
            <FaShoppingCart />
          </Link>
        </div>
        <div className="details-container">
          <div className="details-container-1">
            <h2
              data-testid="product-detail-name"
              className="details-container-title"
            >
              { `${title}` }
            </h2>
            <img
              src={ thumbnail }
              alt="Imagem do Produto"
              className="details-container-img"
            />
          </div>
          <div className="details-container-rigth">
            <div className="details-container-2">
              <h2>{ `R$ ${price}` }</h2>
              <AddToCart
                item={ itemCard }
                classId="product-detail-add-to-cart"
              />
            </div>
            <div className="details-reviews">
              <ul>
                <li>O produto é bom</li>
                <li>O produto é bom demais</li>
                <li>O produto é bão</li>
              </ul>
            </div>
          </div>
        </div>
        <Form itemId={ itemId } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    itemCard: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    itemId: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProductDetails;
