import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class FontVariants extends Component {
  renderOption = (id, selectedOption) => (
    <option key={id} value={id} selected={selectedOption === id}>{id}</option>
  )
  render() {
    const { activeFormEntry, setFontVariant, fontVariantData } = this.props;
    console.log(fontVariantData, 'fontVariantData');
    const selectedOption = activeFormEntry.fontVariant || "regular";
    return(
      <div className="properties">
        <h4>Font Variants</h4>
        <select name="property" className="propertiesSelect" onChange={e => setFontVariant(e.target.value)}>
          {fontVariantData.map(datum => this.renderOption(datum.id, selectedOption))}
        </select>
      </div>
    );
  }
}

FontVariants.propTypes = {
  activeFormEntry: PropTypes.object,
  setFontVariant: PropTypes.func,
  fontVariantData: PropTypes.array,
}

export default FontVariants;
