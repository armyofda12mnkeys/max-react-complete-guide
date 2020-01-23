import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

  /*state = {};
  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps...');
    return state;
  }*/
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate...');
    if(nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate...');
    //return null;
    return { message: 'SnapShot' };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate...'); 
    console.log(snapshot);
  }
  componentDidMount() {
    console.log('[Persons.js] componentDidMount');
  }
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');

    return this.props.persons.map( (person, index) => {
          return <Person name={person.name} age={person.age}
              key={person.id} id={person.id} 
              clicked2={ ()=> this.props.clicked1(index) }
              changed2={ (event) => this.props.changed1(event, index) }
            />
    });
  }
}

export default Persons;
