import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Classification from './Classification';
import FontFamily from './FontFamily';
import FontVariants from './FontVariants';
import FontSize from './FontSize';
import ColorPicker from './ColorPicker';

class RightPanel extends Component {
  render() {
    const { formEntries, setClassification, setFontVariant, setFontFamily, setFontSize } = this.props;
    const activeFormEntry = formEntries.find(formEntry => formEntry.isActive);
    return (
      <div className="RightPanel">
        <Classification
          activeFormEntry={activeFormEntry}
          setClassification={setClassification}
        />
        <FontFamily
          activeFormEntry={activeFormEntry}
          setFontFamily={setFontFamily}
        />
        <FontVariants
          activeFormEntry={activeFormEntry}
          setFontVariant={setFontVariant}
        />
        <FontSize
          activeFormEntry={activeFormEntry}
          setFontSize={setFontSize}
        />
        <ColorPicker textColor />
        <ColorPicker />
      </div>
    )
  }
}

RightPanel.propTypes = {
  formEntries: PropTypes.array,
  setClassification: PropTypes.func,
  setFontVariant: PropTypes.func,
  setFontFamily: PropTypes.func,
}

export default RightPanel;
