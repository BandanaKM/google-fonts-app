import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import FontForm from './FontForm';

class FontFormList extends Component {
  render() {
    const { formEntries, setFormEntryAt, toggleIsEditingAt, newFormEntrySubmitHandler, removeFormEntryAt, addEntryAfter, setActive } = this.props;
    return (
      <ul>
        {formEntries.map((entry, index) =>
          <FontForm
            key={index}
            entry={entry}
            setFormEntry={text => setFormEntryAt(text, index)}
            handleToggleEditing={() => toggleIsEditingAt(index)}
            newFormEntrySubmitHandler={newFormEntrySubmitHandler}
            handleRemove={() => removeFormEntryAt(index)}
            handleAdd={() => addEntryAfter(index)}
            handleActive={() => setActive(index)}
          />
        )}
      </ul>
    );
  }
}

FontFormList.propTypes = {
  formEntries: PropTypes.array,
  setFormEntryAt: PropTypes.func,
  toggleIsEditingAt: PropTypes.func,
  addEntryAfter: PropTypes.func,
  setActive: PropTypes.func,
}

export default FontFormList;
