import React from 'react';

/*function Person () {
  return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );
}*/

const person = (props) => {
    return (
    <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
    );
}

export default person;
