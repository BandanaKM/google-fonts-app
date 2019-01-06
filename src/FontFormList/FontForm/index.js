import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditFont from './EditFont';
import './styles.css';

class FontForm extends Component {
  render() {
   const { setFormEntry, entry, handleRemove, handleAdd, isEditing, handleActive } = this.props;
    return (
      <li className="fontForm" >
        <EditFont
          handleFormEdits={e => setFormEntry(e.target.value)}
          isEditing={isEditing}
          handleActive={handleActive}
          fontFamily={entry.fontFamily}
          fontSize={entry.fontSize}
          fontVariant={entry.fontVariant}
          backgroundColor={entry.backgroundColor}
          color={entry.color}
        >
          {entry}
        </EditFont>
        { entry.isActive ? '*' : null}
        <button onClick={handleAdd}>Add</button>
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
  handleAdd: PropTypes.func,
  handleActive: PropTypes.func,
}


export default FontForm;
