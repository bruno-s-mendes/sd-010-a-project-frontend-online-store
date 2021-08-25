import React, { Component } from 'react';
import mercadolivre from '../Img/mercadolivre.png';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={ mercadolivre } alt="logo mercadolivre" className="header-img" />
        <div className="header-title">
          <h1 className="header-h1">Mercado Fake</h1>
          <p className="header-p">A loja do grupo 26</p>
        </div>
      </header>

    );
  }
}
