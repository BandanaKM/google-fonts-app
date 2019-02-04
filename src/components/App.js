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
  // state = {
  //   fontFamilyData: [
  //     {
  //      id: 'Cantora One',
  //      displayText: 'Cantora One'
  //     },
  //     {
  //      id: "Oswald",
  //      displayText: "Oswald"
  //     },
  //     {id: "Playfair Display",
  //      displayText: "Playfair Display"
  //     },
  //   ],
  //   fontVariantData: [
  //     {id: "regular",
  //      displayText: "regular"
  //     },
  //     {id: "bold",
  //      displayText: "bold"
  //     },
  //     {id: "italic",
  //      displayText: "italic"
  //     },
  //   ],
  //   formEntries: [
  //     {
  //       text: 'Hey Bana, how are you doing?',
  //       isActive: true,
  //       classification: "",
  //       fontVariant: "",
  //       fontFamily: "",
  //       fontSize: 20,
  //       color: "",
  //       backgroundColor: ""
  //     },
  //     {
  //       text: 'I am doing well, actually.',
  //       isActive: false,
  //       classification: "",
  //       fontVariant: "",
  //       fontFamily: "",
  //       fontSize: 20,
  //       color: "",
  //       backgroundColor: ""
  //     },
  //     {
  //       text: 'That is great.',
  //       isActive: false,
  //       classification: "",
  //       fontVariant: "",
  //       fontFamily: "",
  //       fontSize: 20,
  //       color: "",
  //       backgroundColor: ""
  //     },
  //   ]
  // }

   // setFormEntryAt = (text, indexToChange) =>
   //   this.setState({
   //     formEntries: this.state.formEntries.map((formEntry, index) => {
   //       if (index === indexToChange) {
   //         return {
   //           ...formEntry,
   //           text
   //         };
   //       }
   //        return formEntry;
   //     })
   // });

  /* filter */

  // addEntryAfter = index => {
  //   this.setState({
  //     formEntries: [
  //       ...this.state.formEntries.slice(0, index + 1),
  //       {
  //         text: '',
  //         isActive: false,
  //       },
  //       ...this.state.formEntries.slice(index + 1),
  //     ]
  //   })
  // }

  /* pass in payload */

  // setActive = indexToChange => {
  //   this.setState({
  //     formEntries: this.state.formEntries.map((formEntry, index) => {
  //       if (index === indexToChange) {
  //         return {
  //           ...formEntry,
  //           isActive: true,
  //         }
  //       }
  //       return {
  //         ...formEntry,
  //         isActive: false,
  //       }
  //     })
  //   })
  // }

  // setFieldAt = (value, fieldToChange) => {
  //   this.setState({
  //     formEntries: this.state.formEntries.map(formEntry => {
  //       if (formEntry.isActive) {
  //         return {
  //           ...formEntry,
  //           [fieldToChange]: value
  //         }
  //       }
  //       return formEntry;
  //     })
  //   })
  // }

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

    console.log(formEntries, 'FORM ENTRIES');

    return (
      <div className="App">
        <LeftPanel />
        <FontFormList
          formEntries={formEntries}
          toggleIsEditingAt={this.toggleIsEditingAt}
          // setFormEntryAt={this.setFormEntryAt}
          // addEntryAfter={this.addEntryAfter}
          // setActive={this.setActive}
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
