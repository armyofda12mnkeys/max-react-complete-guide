import React from 'react';
import './Person.css'
import Radium from 'radium';
/*function Person () {
  return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );
}*/

const person = (props) => {
    return (
      <div className="Person">
        <p onClick={props.click}>{props.id}: I'm a {props.name} and I am {props.age} years old!</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    );
}

export default Radium(person);
