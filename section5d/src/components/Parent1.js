import React from 'react';
import Child from './Child';
import classes from './Parent.module.css';

const parent1 = () => {
    return (
        <div className="Parent1">
            <div>child with parent1 (how to get CSS Modules to do a rule like this without an 'ugly' solution):</div>
            <Child>test</Child>
        </div>
    );
}


export default parent1;