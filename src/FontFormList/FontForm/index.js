import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditFont from './EditFont';
import './styles.css';

class FontForm extends Component {
  render() {
   const { setFormEntry, entry } = this.props;
    return (
      <li className="fontForm">
        <EditFont handleFormEdits={e => setFormEntry(e.target.value)}>
          {entry}
        </EditFont>
      </li>
    );
  }
}

FontForm.propTypes = {
  entry: PropTypes.object,
  setFormEntry: PropTypes.func,
  handleToggleEditing: PropTypes.func,
  newFormEntrySubmitHandler: PropTypes.func,
}


export default FontForm;
