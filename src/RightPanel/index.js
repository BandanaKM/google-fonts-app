import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Classification from './Classification';
import FontFamily from './FontFamily';
import FontVariants from './FontVariants';

class RightPanel extends Component {
  render() {
    const { formEntries, setClassification } = this.props;
    return (
      <div className="RightPanel">
        <Classification
          activeFormEntry={formEntries.find(formEntry => formEntry.isActive)}
          setClassification={setClassification}
        />
        <FontFamily />
        <FontVariants />
      </div>
    )
  }
}

RightPanel.propTypes = {
  formEntries: PropTypes.array,
  setClassification: PropTypes.func,
}

export default RightPanel;
