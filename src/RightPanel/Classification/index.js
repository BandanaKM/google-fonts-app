import React, { Component } from 'react';
import './styles.css';

class Classification extends Component {
  render() {
    return(
      <ul className="classificationSelect">
      <li>
          <input type="radio" id="all" name="all" />
          <label htmlFor="all">All</label>
      </li>
      <li>
          <input type="radio" id="serif" name="all" />
          <label htmlFor="serif">Serif</label>
      </li>
      <li>
          <input type="radio" id="handwriting" name="all" />
          <label htmlFor="handwriting">Handwriting</label>
      </li>
      <li>
          <input type="radio" id="sans-serif" name="all" />
          <label htmlFor="sans-serif">Sans-serif</label>
      </li>
      <li>
          <input type="radio" id="display" name="all" />
          <label htmlFor="display">Display</label>
      </li>
      <li>
          <input type="radio" id="monospace" name="all" />
          <label htmlFor="monospace">Monospace</label>
      </li>
      </ul>
    );
  }
}

export default Classification;
