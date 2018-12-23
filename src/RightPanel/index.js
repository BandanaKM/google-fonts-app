import React, { Component } from 'react';
import './styles.css';
import Classification from './Classification';
import FontFamily from './FontFamily';
import FontVariants from './FontVariants';

class RightPanel extends Component {
  render() {
    return (
      <div className="RightPanel">
        <Classification />
        <FontFamily />
        <FontVariants />
      </div>
    )
  }
}

export default RightPanel;
