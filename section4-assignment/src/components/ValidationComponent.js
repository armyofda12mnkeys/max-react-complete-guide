import React from 'react';

const ValidationComponent = (props) => {
  return (
    <div>
      ValidationComponent:<br/>
      {props.text.length < 5 ? 'Text too short' : 'Text long enough'}
    </div>
  );
}

export default ValidationComponent;
