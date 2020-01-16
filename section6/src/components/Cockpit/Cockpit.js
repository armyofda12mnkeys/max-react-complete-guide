import React from 'react';
import classes from '../../containers/App.module.css';

const cockpit = (props) => {

    let btnClass = [classes.Button]
    if(props.showPersons ) {
        btnClass.push(classes.Red);
    }
    const assignedClasses = [];
    if (props.persons.length <= 2 ) {
      assignedClasses.push(classes.red); //classes = ['red'];
    }
    if (props.persons.length <= 1 ) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold'];
    }

    return (
        <React.Fragment>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!!!</p>
            <button onClick={props.togglePersonsHandler} className={btnClass.join(' ')}>Toggle Persons</button>
            { /*<button onClick={ () => this.togglePersonsHandler() } className={classes.Button}>Toggle Persons</button>*/ }
        </React.Fragment>
    );
}

export default cockpit;