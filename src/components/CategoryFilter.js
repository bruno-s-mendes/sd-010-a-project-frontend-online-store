import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import './CategoryFilter.css';

class CategoryFilter extends Component {
  constructor() {
    super();
    this.state = { categoryList: [] };
    this.sendId = this.sendId.bind(this);
  }

  componentDidMount() {
    this.fetchCategoryList();
  }

  sendId(id) {
    const { fetchAPI } = this.props;
    fetchAPI(id);
  }

  async fetchCategoryList() {
    const dataCategories = await api.getCategories();
    this.setState({ categoryList: dataCategories });
  }

  render() {
    const { categoryList } = this.state;
    return (
      <nav className="side-nav">
        <aside>
          {categoryList.map(({ name, id }) => (
            <option
              onClick={ () => this.sendId(id) }
              data-testid="category"
              key={ id }
              className="side-nav-option"
            >
              {name}
            </option>
          ))}
        </aside>
      </nav>
    );
  }
}

CategoryFilter.propTypes = { fetchAPI: PropTypes.func.isRequired };

export default CategoryFilter;
