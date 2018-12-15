import React, { Component } from 'react';
import './styles.css';

class Properties extends Component {
  render() {
    return(
      <div className="properties">
        <h4>Properties</h4>
        <select name="property" className="propertiesSelect">
        <option value="regular">regular</option>
        <option value="bold">bold</option>
        <option value="italic">italic</option>
        </select>
      </div>
    );
  }
}

export default Properties;
