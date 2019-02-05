import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age:28},
      {name: 'Manu', age:29},
      {name: 'Stephanie', age:26}
    ],
    otherState: 'some other value'
  }  
  
  switchNameHandler = (newName = 'maximii') => {
    //console.log('Was clicked');
    this.setState(
      {
        persons: [
          {name: newName , age:26},
          {name: 'Manuli', age:27},
          {name: 'Stephaniely', age:24}
        ]
      }
    );
  }

  nameChangedHandler = (event) => {
    this.setState(
    {
      persons: [
        {name: 'Max', age:26},
        {name: event.target.value, age:27},
        {name: 'Stephaniely', age:24}
      ]
    }
  );
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'maxim')}>Switch Name</button>
        <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age}/>
        <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'Max!')}
         changed={this.nameChangedHandler}>My hobbies: Racing</Person>
        <Person 
         name={this.state.persons[2].name}
         age={this.state.persons[2].age}/>
      </div>
    );
    /* return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?')); */

  }
}

export default App;
