import React, { Component } from 'react';
import './styles.css';

class Classification extends Component {
  render() {
    return(
      <ul className="classificationSelect">
      <li>
          <input type="radio" id="all" name="all" />
          <label for="all">All</label>
      </li>
      <li>
          <input type="radio" id="serif" name="all" />
          <label for="serif">Serif</label>
      </li>
      <li>
          <input type="radio" id="handwriting" name="all" />
          <label for="handwriting">Handwriting</label>
      </li>
      <li>
          <input type="radio" id="sans-serif" name="all" />
          <label for="sans-serif">Sans-serif</label>
      </li>
      <li>
          <input type="radio" id="display" name="all" />
          <label for="display">Display</label>
      </li>
      <li>
          <input type="radio" id="monospace" name="all" />
          <label for="monospace">Monospace</label>
      </li>
      </ul>
    );
  }
}

export default Classification;
