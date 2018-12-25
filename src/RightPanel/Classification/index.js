import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const options = [
  {id: "all",
   displayText: "all"
  },
  {id: "serif",
   displayText: "serif"
  },
  {id: "sans-serif",
   displayText: "sans-serif"
  },
  {id: "handwriting",
   displayText: "handwriting"
  },
  {id: "display",
   displayText: "display"
  },
  {id: "monospace",
   displayText: "monospace"
  },
]

class Classification extends Component {

 renderListItem = (id, displayText, selectedValue) =>
  (<li key={id} onClick={() => { this.props.setClassification(id) }}>
      <input type="radio" id={id} name="classification" checked={selectedValue === id} />
      <label htmlFor={id}>{displayText}</label>
  </li>);

  render() {
    const { activeFormEntry } = this.props;
    const selectedClassification = activeFormEntry.classification || "all";
    return(
      <ul className="classificationSelect">
        {options.map(option => this.renderListItem(option.id, option.displayText, selectedClassification))}
      </ul>
    );
  }
}

Classification.propTypes = {
  activeFormEntry: PropTypes.object,
  setClassification: PropTypes.func,
}

export default Classification;
