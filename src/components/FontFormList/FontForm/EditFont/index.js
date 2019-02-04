import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditFont extends Component {
  render(){
    const { handleFormEdits, children, handleActive, fontFamily, fontSize, fontVariant, backgroundColor, color } = this.props;
    const fontWeight = fontVariant !== 'italic' ? fontVariant : '';
    const fontStyle = fontVariant === 'italic' ? fontVariant : '';
    const fontSizeInPixels = `${fontSize}px`;
    return (
        <div onClick={handleActive}>
          {fontFamily && <link rel="stylesheet" type="text/css" href={`https://fonts.googleapis.com/css?family=${fontFamily}`} />}
          <textarea type="text" value={children.text} style={{fontWeight, fontStyle, fontFamily, fontSize: fontSizeInPixels, backgroundColor, color}} className="editFont" onChange={handleFormEdits}>
          </textarea>
        </div>
    );
  }
}

EditFont.propTypes = {
  handleFormEdits: PropTypes.func,
  handleActive: PropTypes.func,
  fontFamily: PropTypes.string,
}

export default EditFont;
