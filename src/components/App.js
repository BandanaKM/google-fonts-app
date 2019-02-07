import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import FontFormList from './FontFormList';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { setFieldAt } from '../state/actions';
import { connect } from 'react-redux';
import { selectApplicationState } from '../state/selectors';

const mapStateToProps = state => {
  const applicationState = selectApplicationState(state);
  const { formEntries, fontFamilyData, fontVariantData } = applicationState;

  return {
    applicationState,
    formEntries,
    fontFamilyData,
    fontVariantData,
  };
};

const mapDispatchToProps = {
  setFieldAt,
};

class App extends Component {
  static propTypes = {
    applicationState: PropTypes.object,
    fontFamilyData: PropTypes.array,
    formEntries: PropTypes.array,
    fontVariantData: PropTypes.array,
    setFieldAt: PropTypes.func,
  }

  setClassification = (value) => {
    this.props.setFieldAt(value, 'classification');
  }

  setFontVariant = (value) => {
    this.props.setFieldAt(value, 'fontVariant');
  }

  setFontFamily = (value) => {
    this.props.setFieldAt(value, 'fontFamily');
  }

  setFontSize = (value) => {
    this.props.setFieldAt(value, 'fontSize');
  }

  setBackgroundColor = (value) => {
    this.props.setFieldAt(value, 'backgroundColor');
  }

  setTextColor = (value) => {
    this.props.setFieldAt(value, 'color');
  }

  render() {
    const { fontFamilyData, formEntries, fontVariantData } = this.props;

    return (
      <div className="App">
        <LeftPanel />
        <FontFormList
          formEntries={formEntries}
          toggleIsEditingAt={this.toggleIsEditingAt}
        />
        <RightPanel
          formEntries={formEntries}
          setClassification={this.setClassification}
          setFontVariant={this.setFontVariant}
          setFontFamily={this.setFontFamily}
          setFontSize={this.setFontSize}
          setBackgroundColor={this.setBackgroundColor}
          setTextColor={this.setTextColor}
          fontFamilyData={fontFamilyData}
          fontVariantData={fontVariantData}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
