import React, { Component } from 'react';
import './styles.css';


class FontFamily extends Component {
  render() {
    return(
      <div className="classification">
        <h4>Font Family</h4>
        <select name="classification" className="classificationSelect">
        <option value="arial">Arial</option>
        <option value="times">Times New Roman</option>
        <option value="garamond">Garamond</option>
        </select>
      </div>
    );
  }
}

export default FontFamily;
