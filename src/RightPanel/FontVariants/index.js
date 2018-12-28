import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const options = [
  {id: "regular",
   displayText: "regular"
  },
  {id: "bold",
   displayText: "bold"
  },
  {id: "italic",
   displayText: "italic"
  },
]

class FontVariants extends Component {
  renderOption = (id, selectedOption) => (
    <option value={id} selected={selectedOption === id}>{id}</option>
  )
  render() {
    const { activeFormEntry, setFontVariant } = this.props;
    const selectedOption = activeFormEntry.fontVariant || "regular";
    return(
      <div className="properties">
        <h4>Font Variants</h4>
        <select name="property" className="propertiesSelect" onChange={e => setFontVariant(e.target.value)}>
          {options.map(option => this.renderOption(option.id, selectedOption))}
        </select>
      </div>
    );
  }
}

FontVariants.propTypes = {
  activeFormEntry: PropTypes.object,
  setFontVariant: PropTypes.func,
}

export default FontVariants;
