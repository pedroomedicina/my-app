import React, { Component } from 'react';
import './App.css';
import Person from '../Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <Person />
        <Person />
        <Person />
      </div>
    );
    /* return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?')); */

  }
}

export default App;
