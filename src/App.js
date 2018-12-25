import React, { Component } from 'react';
import './App.css';
import FontFormList from './FontFormList';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

class App extends Component {
  state = {
    pendingMessage: "",
    formEntries: [
      {
        text: 'Hey Bana, how are you doing?',
        isActive: true,
        classification: "all"
      },
      {
        text: 'I am doing well, actually.',
        isActive: false,
        classification: "all"
      },
      {
        text: 'That is great.',
        isActive: false,
        classification: "all"
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
            isActive: true
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
          console.log('IF IS ACTIVE', formEntry.isActive);
          return {
            ...formEntry,
            classification: classificationValue
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
        />
      </div>
    );
  }
}

export default App;
