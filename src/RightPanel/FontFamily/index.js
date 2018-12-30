import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const options = [
  {
   id: "arial",
   displayText: "arial"
  },
  {
   id: "times new roman",
   displayText: "times new roman"
  },
  {id: "garamond",
   displayText: "garamond"
  },
]

class FontFamily extends Component {
  renderOption = (id, selectedOption) => (
    <option value={id} selected={selectedOption === id}>{id}</option>
  )
  render() {
    const { activeFormEntry, setFontFamily } = this.props;
    const selectedOption = activeFormEntry.fontFamily || "arial";
    return(
      <div className="classification">
        <h4>Font Family</h4>
        <select name="classification" className="classificationSelect" onChange={e => setFontFamily(e.target.value)}>
        {options.map(option => this.renderOption(option.id, selectedOption))}
        </select>
      </div>
    );
  }
}

FontFamily.propTypes = {
  activeFormEntry: PropTypes.object,
  setFontFamily: PropTypes.func,
}

export default FontFamily;
