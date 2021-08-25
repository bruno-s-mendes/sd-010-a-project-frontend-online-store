import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './Form.css';

const Rating = (props) => {
  const light = (id) => {
    const stars = document.querySelectorAll('.star-font');
    for (let i = 0; i < id - 1; i += 1) {
      stars[i].classList.add('prev-star');
    }
  };

  const off = () => {
    const stars = document.querySelectorAll('.star-font');
    for (let i = 0; i < stars.length; i += 1) {
      stars[i].classList.remove('prev-star');
    }
  };

  const checkStart = (e) => {
    let id = 0;
    props.setStarCount(e.target.id[4]);
    id = parseInt(e.target.id[4], 10);
    off();
    light(id);
  };

  return (
    <div className="rating">
      <label htmlFor="star1" className="star-label">
        <input
          type="radio"
          name="star"
          id="star1"
          onClick={ (e) => checkStart(e) }
          className="star-input"
        />
        <AiTwotoneStar className="star-font" />
      </label>
      <label
        htmlFor="star2"
        className="star-label"
      >
        <input
          type="radio"
          name="star"
          id="star2"
          onClick={ (e) => checkStart(e) }
          className="star-input"
        />
        <AiTwotoneStar className="star-font" />
      </label>
      <label htmlFor="star3" className="star-label">
        <input
          type="radio"
          name="star"
          id="star3"
          onClick={ (e) => checkStart(e) }
          className="star-input"
        />
        <AiTwotoneStar className="star-font" />
      </label>
      <label htmlFor="star4" className="star-label">
        <input
          type="radio"
          name="star"
          id="star4"
          onClick={ (e) => checkStart(e) }
          className="star-input"
        />
        <AiTwotoneStar className="star-font" />
      </label>
      <label htmlFor="star5" className="star-label">
        <input
          type="radio"
          name="star"
          id="star5"
          onClick={ (e) => checkStart(e) }
          className="star-input"
        />
        <AiTwotoneStar className="star-font" htmlFor="star5" />
      </label>
    </div>
  );
};

Rating.propTypes = {
  setStarCount: PropTypes.func.isRequired,
};

export default Rating;
