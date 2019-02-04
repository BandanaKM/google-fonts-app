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
    const { formEntries, setClassification, setFontVariant, setFontFamily, setFontSize, setBackgroundColor, fontFamilyData,fontVariantData, setTextColor } = this.props;
    console.log(formEntries, 'FORM ENTRIES RIGHT PANEL');
    const activeFormEntry = formEntries.find(formEntry => formEntry.isActive) || {};

    return (
      <div className="RightPanel">
        <Classification
          activeFormEntry={activeFormEntry}
          setClassification={setClassification}
        />
        <FontFamily
          activeFormEntry={activeFormEntry}
          setFontFamily={setFontFamily}
          fontFamilyData={fontFamilyData}
        />
        <FontVariants
          activeFormEntry={activeFormEntry}
          setFontVariant={setFontVariant}
          fontVariantData={fontVariantData}
        />
        <FontSize
          activeFormEntry={activeFormEntry}
          setFontSize={setFontSize}
        />
        <ColorPicker
          activeFormEntry={activeFormEntry}
          isTextColor
          setTextColor={setTextColor}
        />
        <ColorPicker
          activeFormEntry={activeFormEntry}
          setBackgroundColor={setBackgroundColor}
          />
      </div>
    )
  }
}

RightPanel.propTypes = {
  formEntries: PropTypes.array,
  setClassification: PropTypes.func,
  setFontVariant: PropTypes.func,
  setFontFamily: PropTypes.func,
  setFontSize: PropTypes.func,
  setBackgroundColor: PropTypes.func,
  setTextColor: PropTypes.func,
  fontFamilyData: PropTypes.array,
  fontVariantData: PropTypes.array,
}

export default RightPanel;
