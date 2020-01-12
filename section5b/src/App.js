import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

class App extends Component {

  state = {
    persons: [ 
      {id: 101, name: 'Max', age: 28},
      {id: 102, name: 'Manu', age: 29},
      {id: 103, name: 'Steph', age: 30},
    ],
    otherStateProp: 'test',
    showPersons : true
  }


  deletePersonHandler = (personIndex) => {
    console.log('TEST');
    //const persons = this.state.persons;
    const persons = [... this.state.persons]; //make a copy vs reference (above is a pointer and mutating state directly which isn't good)
    persons.splice(personIndex,1);
    this.setState({
      persons: persons
    })
  }
  nameChangeHandler = (event, index) => {
    let personsCopy = [...this.state.persons];
    let person = personsCopy[index];
    person.name = event.target.value;
    personsCopy[index] = person;

    this.setState(
      {
        'persons': personsCopy
      }
    );
  }
  
  togglePersonsHandler = (event) => {
    this.setState(
      {
        showPersons: !this.state.showPersons
      }
    );
  }

  render() {
    console.log(this.state);
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'green',
        color: 'black'
      }
    };

    if(this.state.showPersons ) 
      style.backgroundColor = 'yellow';

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <button onClick={ () => this.togglePersonsHandler() } style={style}>Toggle Persons</button>
        { 
          this.state.showPersons 
          ?
            <div>
              {this.state.persons.map( (person, index) => {
                return <Person name={person.name} age={person.age}
                    key={person.id} id={person.id} 
                    click={ ()=> this.deletePersonHandler(index) }
                    changed={ (event) => this.nameChangeHandler(event, index) }
                  />
              })}
             {/*
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
              click={this.switchNameHandler}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, '-POSTPEND1')}  
              changed={this.nameChangeHandler}/>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}
              click={() => this.switchNameHandler('-POSTPEND2')} />
            */}
          </div> 
          : 
          null
        }
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
