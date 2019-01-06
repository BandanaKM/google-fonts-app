import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';

class ColorPicker extends Component {
  state = {
    displayColorPicker: false,
  }

  toggleDisplay = () => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    })
  }

  handleBackgroundColor = (color) => {
    console.log(color.hex)
    this.props.setBackgroundColor(color.hex);
  }

  render() {
    const { isTextColor, activeFormEntry } = this.props;
    const selectedBackgroundColor = activeFormEntry.backgroundColor || "white";
    return (
      <div>
        <h4>{isTextColor ? 'Text Color' : 'Background Color'}</h4>
        {this.state.displayColorPicker &&
          <SketchPicker onChangeComplete={!isTextColor && this.handleBackgroundColor} color={selectedBackgroundColor}/>
        }
        <button onClick={this.toggleDisplay}>Go</button>
      </div>
    )
  }
}

ColorPicker.propTypes = {
  isTextColor: PropTypes.bool,
  activeFormEntry: PropTypes.object,
  setBackgroundColor: PropTypes.func,
}

export default ColorPicker;
