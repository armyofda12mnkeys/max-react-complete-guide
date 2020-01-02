import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [ 
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 30},
    ],
    otherStateProp: 'test'
  }

  switchNameHandler = (newName) => {
    console.log('was clicked');
    /*let newpersons = [...this.state.persons];
    newpersons[0] = { name: 'MAXXX', age: 66} ;
    this.setState( {...this.state, persons: newpersons} );*/
    this.setState(
      {
        persons: [ 
          {name: 'Maxxx'+newName, age: 38},
          {name: 'Manuuu'+newName, age: 39},
          {name: 'Stephhh'+newName, age: 40},
        ]
      }
    );
    
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <br/>
        <button onClick={this.switchNameHandler.bind(this, '-POSTPEND1')}>Switch Name</button>
        <br/>
        <button onClick={ () => this.switchNameHandler('-POSTPEND2') }>Switch Name</button>
        <br/>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
          click={this.switchNameHandler}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, '-POSTPEND1')}  />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}
          click={() => this.switchNameHandler('-POSTPEND2')} />
      </div>
    );
    //same as
    /*
    return React.createElement('div', {className: 'App'}, 
      React.createElement('h1', null, 'Hi, I\'m a React App2')
    );
    */
  }
}

export default App;
