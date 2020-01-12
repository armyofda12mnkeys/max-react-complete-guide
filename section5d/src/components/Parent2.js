import React from 'react';
import Child from './Child';
import classes from './Parent.module.css';

const parent2 = () => {
    return (
        <div className="Parent2">
            <div>child with parent2 (how to get CSS Modules to do a rule like this without an 'ugly' solution):</div>
            <Child>test</Child>
        </div>
    );
}

export default parent2;