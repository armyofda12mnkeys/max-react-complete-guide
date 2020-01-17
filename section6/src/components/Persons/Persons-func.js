import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  console.log('[Persons.js] rendering...');
  return props.persons.map( (person, index) => {
        return <Person name={person.name} age={person.age}
            key={person.id} id={person.id} 
            clicked2={ ()=> props.clicked1(index) }
            changed2={ (event) => props.changed1(event, index) }
          />
  });
}

export default persons;
