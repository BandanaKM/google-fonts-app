import React, { Component } from 'react';
import './App.css';
import FontFormList from './FontFormList';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

class App extends Component {
  state = {
    pendingMessage: "",
    configuration: [
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
    formEntries: [
      {
        text: 'Hey Bana, how are you doing?',
        isActive: true,
        classification: "",
        fontVariant: "",
        fontFamily: "",
        fontSize: 20,
        textColor: ""
      },
      {
        text: 'I am doing well, actually.',
        isActive: false,
        classification: "",
        fontVariant: "",
        fontFamily: "",
        fontSize: 20,
        textColor: ""
      },
      {
        text: 'That is great.',
        isActive: false,
        classification: "",
        fontVariant: "",
        fontFamily: "",
        fontSize: 20,
        textColor: ""
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

  removeFormEntryAt = index => {
    this.setState({
      formEntries: [
        ...this.state.formEntries.slice(0, index),
        ...this.state.formEntries.slice(index + 1)
      ]
    })
  }

  addEntryAfter = index => {
    this.setState({
      formEntries: [
        ...this.state.formEntries.slice(0, index + 1),
        this.newFormEntry(),
        ...this.state.formEntries.slice(index + 1),
      ]
    })
  }

  newFormEntry = () => (
    {
      text: '',
      isActive: false,
    }
  )

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

  setClassification = (classificationValue) => {
    this.setState({
      formEntries: this.state.formEntries.map(formEntry => {
        if (formEntry.isActive) {
          return {
            ...formEntry,
            classification: classificationValue
          }
        }
        return formEntry;
      })
    })
  }

  setFontVariant = (fontVariantValue) => {
    this.setState({
      formEntries: this.state.formEntries.map(formEntry => {
        if (formEntry.isActive) {
          return {
            ...formEntry,
            fontVariant: fontVariantValue,
          }
        }
        return formEntry;
      })
    })
  }

  setFontFamily = (fontFamilyValue) => {
    this.setState({
      formEntries: this.state.formEntries.map(formEntry => {
        if (formEntry.isActive) {
          return {
            ...formEntry,
            fontFamily: fontFamilyValue,
          }
        }
        return formEntry;
      })
    })
  }

  setFontSize = (fontSizeValue) => {
    this.setState({
      formEntries: this.state.formEntries.map(formEntry => {
        if (formEntry.isActive) {
          return {
            ...formEntry,
            fontSize: fontSizeValue,
          }
        }
        return formEntry;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <LeftPanel />
        <FontFormList
          formEntries={this.state.formEntries}
          toggleIsEditingAt={this.toggleIsEditingAt}
          setFormEntryAt={this.setFormEntryAt}
          removeFormEntryAt={this.removeFormEntryAt}
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
          configuration={this.state.configuration}
        />
      </div>
    );
  }
}

export default App;
