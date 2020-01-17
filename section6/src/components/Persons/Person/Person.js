import React, {Component} from 'react';
import classes from './Person.module.css'

class Person extends Component {

  render () {
      console.log('[Person.js] rendering...');

      return (
        <div className={classes.Person}>
          <p onClick={this.props.clicked2}>{this.props.id}: I'm a {this.props.name} and I am {this.props.age} years old!</p>
          <input type="text" onChange={this.props.changed2} value={this.props.name} />
        </div>
      );
  }

}

/*
const person = (props) => {
    console.log('[Person.js] rendering...');

    return (
      <div className={classes.Person}>
        <p onClick={props.clicked2}>{props.id}: I'm a {props.name} and I am {props.age} years old!</p>
        <input type="text" onChange={props.changed2} value={props.name} />
      </div>
    );
}
*/

export default Person;
