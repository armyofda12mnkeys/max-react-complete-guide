import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

    const [personsState, setPersonsState] = useState({
      persons: [ 
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Steph', age: 30},
      ],
      otherStateProp: 'test'
    });
    console.log(personsState);

    const switchNameHandler = (newName) => {
      setPersonsState(
        {
          ...personsState,
          persons: [ 
            {name: 'Maxxx'+newName, age: 38},
            {name: 'Manuuu'+newName, age: 39},
            {name: 'Stephhh'+newName, age: 40},
          ]
        }
      );
    }
    
    const nameChangeHandler = (event) => {
      setPersonsState(
        {
          ...personsState,
          persons: [ 
            {name: 'Maxxxy', age: 50},
            {name: event.target.value, age: 51},
            {name: 'Stephhhy', age: 52},
          ]
        }
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <br/>
        <button onClick={switchNameHandler.bind(this, '-POSTPEND1')}>Switch Name</button>
        <br/>
        <button onClick={ () => switchNameHandler('-POSTPEND2') }>Switch Name</button>
        <br/>

        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}
          click={switchNameHandler} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}
          click={switchNameHandler.bind(this, '-POSTPEND1')}
          changed={nameChangeHandler}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}
          click={()=>switchNameHandler('-POSTPEND2')}/>
      </div>
    );
}

export default app;

/*
state = {
  persons: [ 
    {name: 'Max', age: 28},
    {name: 'Manu', age: 29},
    {name: 'Steph', age: 30},
  ]
}

switchNameHandler = () => {
  this.setState(
    {
      persons: [ 
        {name: 'Maxxx', age: 38},
        {name: 'Manuuu', age: 39},
        {name: 'Steph', age: 30},
      ]
    }
  );
  
}
*/