import React, { Component } from 'react';
//import './App.css';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Person from '../components/Persons/Person/Person';
import Cockpit from '../components/Cockpit/Cockpit'

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
    const persons = [...this.state.persons]; //make a copy vs reference (above is a pointer and mutating state directly which isn't good)
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
    let persons = null;

    if(this.state.showPersons ) {
      //btnClass.push(classes.Red);
      persons = <React.Fragment>
                  <Persons persons={this.state.persons} 
                    clicked={ this.deletePersonHandler } 
                    changed={ this.nameChangeHandler }
                    />
                  {/*this.state.persons.map( (person, index) => {
                    return <Person name={person.name} age={person.age}
                        key={person.id} id={person.id} 
                        click={ ()=> this.deletePersonHandler(index) }
                        changed={ (event) => this.nameChangeHandler(event, index) }
                      />
                  })*/}
                </React.Fragment>
    
      
    }




    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          togglePersonsHandler={this.togglePersonsHandler}
        />
        {persons}
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
