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
      }
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


  render() {
    return (
      <div className="App">
        <LeftPanel />
        <FontFormList
          formEntries={this.state.formEntries}
          toggleIsEditingAt={this.toggleIsEditingAt}
          setFormEntryAt={this.setFormEntryAt}
          pendingMessage={this.state.pendingMessage}
        />
        <form onSubmit={this.newMessageSubmitHandler}>
         <input
           type="text"
           onChange={this.handleMessageInput}
           value={this.state.pendingMessage}
           placeholder="My Message"
         />
         <div className="counter">
          <button type="submit" name="submit" value="submit">Submit</button>
         </div>
       </form>
        <RightPanel />
      </div>
    );
  }
}

export default App;
