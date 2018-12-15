import React, { Component } from 'react';
import './App.css';
import LeftPanel from './LeftPanel';
import FontFormList from './FontFormList';
import RightPanel from './RightPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      formEntries: [
        {
          text: 'Sample text',
        },
        {
          text: 'Sample text',
        },
        {
          text: 'Sample text',
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
         <LeftPanel />
         <FontFormList formEntries={this.state.formEntries} />
         <RightPanel />
      </div>
    );
  }
}

export default App;
