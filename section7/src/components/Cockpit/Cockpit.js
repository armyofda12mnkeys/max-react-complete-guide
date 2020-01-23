import React, { useEffect } from 'react';
import classes from '../../containers/App.module.css';

const Cockpit = (props) => {
    useEffect(()=>{
      console.log('[Cockpit.js] useEffect#1');

      //const timer =
      setTimeout(()=>{
        console.log('Saved data to cloud');
        alert('Saved data to cloud!');
      }, 1000)

      return () => {
        console.log('[Cockpit.js] cleanup#1');
        //clearTimeout(timer);
      }
    }, []); //only on mount and unmount

    useEffect(()=>{
      console.log('[Cockpit.js] useEffect#2');
      return () => {
        console.log('[Cockpit.js] cleanup#2');
      }
    }); //mount/unmount and re-renders/did-updates

    let btnClass = [classes.Button]
    if(props.showPersons ) {
        btnClass.push(classes.Red);
    }
    const assignedClasses = [];
    if (props.personsLength <= 2 ) {
      assignedClasses.push(classes.red); //classes = ['red'];
    }
    if (props.personsLength <= 1 ) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold'];
    }

    return (
        <React.Fragment>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!!!</p>
            <button onClick={props.togglePersonsHandler} className={btnClass.join(' ')}>Toggle Persons</button>
            { /*<button onClick={ () => this.togglePersonsHandler() } className={classes.Button}>Toggle Persons</button>*/ }
        </React.Fragment>
    );
}

export default React.memo(Cockpit);