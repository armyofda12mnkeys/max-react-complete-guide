import React, { useState } from 'react';
import './UserInput.css';

const userinput = (props) => {


    return (
      <div className="UserInput">
        <input onChange={props.changeUsername} value={props.username} />
      </div>
    );
}

export default userinput;
