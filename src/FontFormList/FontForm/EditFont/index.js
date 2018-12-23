import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditFont extends Component {
  render(){
    const { handleFormEdits, children } = this.props;
    return (
        <div>
          <input type="text" value={children.text} onChange={handleFormEdits} />
        </div>
    );
  }
}

EditFont.propTypes = {
  handleFormEdits: PropTypes.func,
}

export default EditFont;
