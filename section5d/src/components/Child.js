import React from 'react';
import classes from './Child.module.css';

const child = (props) => {
    return (
        <div>
            <button className={classes.Child}>child</button>
        </div>
    );
}


export default child;