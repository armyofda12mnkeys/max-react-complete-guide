import React, { useState } from 'react';

const useroutput = (props) => {
    const style = {
      backgroundColor: 'red',
      border: '5px solid black',
      width: '300px',
      margin: '0px auto'
    }

    return (
      <div className="UserOutput" style={style}>
        <p>username: {props.username}</p>
        <p>Para2</p>
      </div>
    );
}

export default useroutput;
