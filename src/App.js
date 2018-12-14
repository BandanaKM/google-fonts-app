import React, { Component } from 'react';
import './App.css';
import LeftPanel from './LeftPanel';
import FontForm from './FontForm';
import RightPanel from './RightPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
         <LeftPanel />
         <FontForm />
         <RightPanel />
      </div>
    );
  }
}

export default App;
