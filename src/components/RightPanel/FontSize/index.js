import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class FontSize extends Component {
  render() {
    const { activeFormEntry, setFontSize } = this.props;
    return (
      <div className="FontSize">
        <h4>FontSize</h4>
        <input type="number" name="quantity" min="1" max="62" value={activeFormEntry.fontSize || 20} onChange={e => setFontSize(e.target.value)}/>
      </div>
    )
  }
}

FontSize.propTypes = {
  activeFormEntry: PropTypes.object,
  setFontSize: PropTypes.func,
}

export default FontSize;
