import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import FontForm from './FontForm';

class FontFormList extends Component {
  render() {
    const { formEntries } = this.props;
    return (
      <ul>
        {formEntries.map((entry, index) =>
          <FontForm key={index} entry={entry.text} />
        )}
      </ul>
    );
  }
}

FontFormList.propTypes = {
  formEntries: PropTypes.array,
}

export default FontFormList;
