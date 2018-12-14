import React, { Component } from 'react';
import './App.css';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div>Hi</div>
         <LeftPanel />
         <RightPanel />
      </div>
    );
  }
}

export default App;
