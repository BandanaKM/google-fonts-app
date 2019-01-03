import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditFont extends Component {
  render(){
    const { handleFormEdits, children, handleActive, fontFamily } = this.props;
    return (
        <div onClick={handleActive}>
          {fontFamily && <link rel="stylesheet" type="text/css" href={`https://fonts.googleapis.com/css?family=${fontFamily}`} />}
          <textarea type="text" value={children.text} style={{fontFamily}} className="editFont" onChange={handleFormEdits}>
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
