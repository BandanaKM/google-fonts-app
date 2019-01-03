import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class FontFamily extends Component {
  state = {
    stylePath: 'https://fonts.googleapis.com/css?family=',
  }

  renderOption = (id, selectedOption) => (
    <option key={id} value={id} selected={selectedOption === id}>{id}</option>
  )

  handleSelectionChange = (e) => {
    this.props.setFontFamily(e.target.value);
    this.setState({
      stylePath: `https://fonts.googleapis.com/css?family=${e.target.value}`
    })
  }

  render() {
    const { activeFormEntry, configuration } = this.props;
    const selectedOption = activeFormEntry.fontFamily || "Cantora+One";
    return(
      <div className="classification">
        <h4>Font Family</h4>
        <select name="classification" className="classificationSelect" onChange={this.handleSelectionChange}>
        {configuration.map(c => this.renderOption(c.id, selectedOption))}
        </select>
      </div>
    );
  }
}

FontFamily.propTypes = {
  activeFormEntry: PropTypes.object,
  setFontFamily: PropTypes.func,
  configuration: PropTypes.array,
}

export default FontFamily;
