import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditFont extends Component {
  render(){
    const { handleFormEdits, children } = this.props;
    console.log(children);
    return(
      <input
        type="text"
        value={children.text}
        onChange={handleFormEdits}
      />
    );
  }
}

EditFont.propTypes = {
  isEditing: PropTypes.bool,
  handleFormEdits: PropTypes.func,
}

export default EditFont;
