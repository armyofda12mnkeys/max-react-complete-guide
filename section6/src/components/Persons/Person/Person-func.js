import React from 'react';
import classes from './Person.module.css'

/*function Person () {
  return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );
}*/

const person = (props) => {
    console.log('[Person.js] rendering...');

    return (
      <div className={classes.Person}>
        <p onClick={props.clicked2}>{props.id}: I'm a {props.name} and I am {props.age} years old!</p>
        <input type="text" onChange={props.changed2} value={props.name} />
      </div>
    );
}

export default person;
