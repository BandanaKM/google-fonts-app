import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Classification from './Classification';
import FontFamily from './FontFamily';
import FontVariants from './FontVariants';

class RightPanel extends Component {
  render() {
    const { formEntries, setClassification, setFontVariant } = this.props;
    return (
      <div className="RightPanel">
        <Classification
          activeFormEntry={formEntries.find(formEntry => formEntry.isActive)}
          setClassification={setClassification}
        />
        <FontFamily />
        <FontVariants
          activeFormEntry={formEntries.find(formEntry => formEntry.isActive)}
          setFontVariant={setFontVariant}
        />
      </div>
    )
  }
}

RightPanel.propTypes = {
  formEntries: PropTypes.array,
  setClassification: PropTypes.func,
  setFontVariant: PropTypes.func,
}

export default RightPanel;
