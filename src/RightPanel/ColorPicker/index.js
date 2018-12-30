import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';

class ColorPicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayColorPicker: false,
    }
  }

  toggleDisplay = () => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    })
  }

  render() {
    const { textColor } = this.props;
    return (
      <div>
        <h4>{textColor ? 'Text Color' : 'Background Color'}</h4>
        {this.state.displayColorPicker && <SketchPicker />}
        <button onClick={this.toggleDisplay}>Go</button>
      </div>
    )
  }
}

ColorPicker.propTypes = {
  textColor: PropTypes.string,
}

export default ColorPicker;
