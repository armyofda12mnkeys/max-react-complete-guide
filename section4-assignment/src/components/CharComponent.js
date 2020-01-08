import React from 'react';

const CharComponent = (props) => {
  const css_styles={display: 'inline-block', border: '1px solid black', cursor: 'pointer', padding: '5px' };
  return (
    <div style={css_styles}
        onClick={props.clicked} >
      [{props.charindex}]:{props.char}
    </div>
  );
}

export default CharComponent;
