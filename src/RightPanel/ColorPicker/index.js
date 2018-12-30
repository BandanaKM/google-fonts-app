import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';

class ColorPicker extends Component {
  render() {
    const { textColor } = this.props;
    return (
      <div>
        <h4>{textColor ? 'Text Color' : 'Background Color'}</h4>
        <SketchPicker />
      </div>
    )
  }
}

export default ColorPicker;

ColorPicker.propTypes = {
  textColor: PropTypes.string,
}
