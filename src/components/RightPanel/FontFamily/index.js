import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class FontFamily extends Component {
  renderOption = (id, selectedOption) => (
    <option key={id} value={id} selected={selectedOption === id}>{id}</option>
  )
  render() {
    const { activeFormEntry, fontFamilyData, setFontFamily } = this.props;
    const selectedOption = activeFormEntry.fontFamily || "Cantora+One";
    return(
      <div className="classification">
        <h4>Font Family</h4>
        <select name="classification" className="classificationSelect" onChange={e => setFontFamily(e.target.value)}>
        {fontFamilyData.map(c => this.renderOption(c.id, selectedOption))}
        </select>
      </div>
    );
  }
}

FontFamily.propTypes = {
  activeFormEntry: PropTypes.object,
  setFontFamily: PropTypes.func,
  fontFamilyData: PropTypes.array,
}

export default FontFamily;
