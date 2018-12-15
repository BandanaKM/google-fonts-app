import React, { Component } from 'react';
import './styles.css';
import Properties from './Properties';
import Classification from './Classification';

class RightPanel extends Component {
  render() {
    return (
      <div className="RightPanel">
        <p>Right panel</p>
        <Properties />
        <Classification />
      </div>
    )
  }
}

export default RightPanel;
