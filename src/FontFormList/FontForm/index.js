import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditFont from './EditFont';
import './styles.css';

class FontForm extends Component {
  render() {
   const { setFormEntry, entry, handleRemove, isEditing } = this.props;
    return (
      <li className="fontForm">
        <EditFont
          handleFormEdits={e => setFormEntry(e.target.value)}
          isEditing={isEditing}
        >
          {entry}
        </EditFont>
        <button onClick={handleRemove}>Delete</button>
      </li>
    );
  }
}

FontForm.propTypes = {
  entry: PropTypes.object,
  setFormEntry: PropTypes.func,
  handleToggleEditing: PropTypes.func,
  newFormEntrySubmitHandler: PropTypes.func,
  handleRemove: PropTypes.func,
}


export default FontForm;
