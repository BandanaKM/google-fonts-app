import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditFont extends Component {
  render(){
    const { handleFormEdits, children, handleActive } = this.props;
    return (
        <div onClick={handleActive}>
          <input type="text" value={children.text} onChange={handleFormEdits} />
        </div>
    );
  }
}

EditFont.propTypes = {
  handleFormEdits: PropTypes.func,
  handleActive: PropTypes.func,
}

export default EditFont;
