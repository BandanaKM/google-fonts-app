import React, { Component } from 'react';
import './App.css';
import FontFormList from './FontFormList';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { removeFormEntryAt } from '../state/actions';
import { connect } from 'react-redux';
import { selectApplicationState } from '../state/selectors';

const mapStateToProps = state => {
  const applicationState = selectApplicationState(state);
  console.log(applicationState, 'APPLICATION STATE');

  return {
    applicationState,
  };
};

const mapDispatchToProps = {
  removeFormEntryAt,
};

class App extends Component {
  state = {
    pendingMessage: "",
    fontFamilyData: [
      {
       id: 'Cantora One',
       displayText: 'Cantora One'
      },
      {
       id: "Oswald",
       displayText: "Oswald"
      },
      {id: "Playfair Display",
       displayText: "Playfair Display"
      },
    ],
    fontVariantData: [
      {id: "regular",
       displayText: "regular"
      },
      {id: "bold",
       displayText: "bold"
      },
      {id: "italic",
       displayText: "italic"
      },
    ],
    formEntries: [
      {
        text: 'Hey Bana, how are you doing?',
        isActive: true,
        classification: "",
        fontVariant: "",
        fontFamily: "",
        fontSize: 20,
        color: "",
        backgroundColor: ""
      },
      {
        text: 'I am doing well, actually.',
        isActive: false,
        classification: "",
        fontVariant: "",
        fontFamily: "",
        fontSize: 20,
        color: "",
        backgroundColor: ""
      },
      {
        text: 'That is great.',
        isActive: false,
        classification: "",
        fontVariant: "",
        fontFamily: "",
        fontSize: 20,
        color: "",
        backgroundColor: ""
      },
    ]
  }

   setFormEntryAt = (text, indexToChange) =>
     this.setState({
       formEntries: this.state.formEntries.map((formEntry, index) => {
         if (index === indexToChange) {
           return {
             ...formEntry,
             text
           };
         }
          return formEntry;
       })
   });

  /* filter */

  addEntryAfter = index => {
    this.setState({
      formEntries: [
        ...this.state.formEntries.slice(0, index + 1),
        {
          text: '',
          isActive: false,
        },
        ...this.state.formEntries.slice(index + 1),
      ]
    })
  }

  /* pass in payload */

  setActive = indexToChange => {
    this.setState({
      formEntries: this.state.formEntries.map((formEntry, index) => {
        if (index === indexToChange) {
          return {
            ...formEntry,
            isActive: true,
          }
        }
        return {
          ...formEntry,
          isActive: false,
        }
      })
    })
  }

  setFieldAt = (value, fieldToChange) => {
    this.setState({
      formEntries: this.state.formEntries.map(formEntry => {
        if (formEntry.isActive) {
          return {
            ...formEntry,
            [fieldToChange]: value
          }
        }
        return formEntry;
      })
    })
  }

  setClassification = (value) => {
    this.setFieldAt(value, 'classification');
  }

  setFontVariant = (value) => {
    this.setFieldAt(value, 'fontVariant');
  }

  setFontFamily = (value) => {
    this.setFieldAt(value, 'fontFamily');
  }

  setFontSize = (value) => {
    this.setFieldAt(value, 'fontSize');
  }

  setBackgroundColor = (value) => {
    this.setFieldAt(value, 'backgroundColor');
  }

  setTextColor = (value) => {
    this.setFieldAt(value, 'color');
  }

  render() {
    return (
      <div className="App">
        <LeftPanel />
        <FontFormList
          formEntries={this.state.formEntries}
          toggleIsEditingAt={this.toggleIsEditingAt}
          setFormEntryAt={this.setFormEntryAt}
          addEntryAfter={this.addEntryAfter}
          pendingMessage={this.state.pendingMessage}
          setActive={this.setActive}
        />
        <RightPanel
          formEntries={this.state.formEntries}
          setClassification={this.setClassification}
          setFontVariant={this.setFontVariant}
          setFontFamily={this.setFontFamily}
          setFontSize={this.setFontSize}
          setBackgroundColor={this.setBackgroundColor}
          setTextColor={this.setTextColor}
          fontFamilyData={this.state.fontFamilyData}
          fontVariantData={this.state.fontVariantData}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
