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
        isEditing: false,
      },
      {
        text: 'I am doing well, actually.',
        isEditing: false,
      },
      {
        text: 'That is great.',
        isEditing: false,
      },
    ]
  }

  toggleIsEditingAt = (isEditing, indexToChange) =>
   this.setState({
     messages: this.state.formEntries.map((formEntry, index) => {
       if (index === indexToChange) {
         return {
           ...formEntry,
           isEditing: !formEntry[isEditing]
         };
       }
        return formEntry;
     })
   });

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

   newFormEntrySubmitHandler = e => {
     e.preventDefault();
     this.setState({
       formEntries: [
         ...this.state.formEntries,
        {
          text: this.state.pendingMessage,
          isEditing: false,
        }
       ],
       pendingMessage: ''
     });
   }

  removeFormEntryAt = index => {
    this.setState({
      formEntries: [
        ...this.state.formEntries.slice(0, index),
        ...this.state.formEntries.slice(index + 1)
      ]
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
          pendingMessage={this.state.pendingMessage}
        />
        <RightPanel />
      </div>
    );
  }
}

export default App;
