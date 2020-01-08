import React, {useState} from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

function App() {


  const [inputState, setinputState] = useState('initstate');
  console.log(inputState);


  const inputChangeHandler = (event) => {
    console.log('inputChangeHandler');
    setinputState(event.target.value);
  }

  const charClickHandler = (chr, index_to_delete) => {
    console.log(`charClickHandler[${index_to_delete}]: ${chr}`);
    const chars_arr = inputState.split(''); //make a copy vs reference (above is a pointer and mutating state directly which isn't good)
    chars_arr.splice(index_to_delete,1);
    setinputState(chars_arr.join(''));
  }

  return (
    <div className="App">
      <input value={inputState} onChange={inputChangeHandler} />
      {inputState}-
      {inputState.length}-
      {typeof inputState}-
      {typeof inputState.split('')}-
      {inputState.split('').length}

      <ValidationComponent text={inputState} />
      
      {
      /*
      <CharComponent charindex={'INDEX'} char='a' />
      <CharComponent charindex={'INDEX'} char='b' />
      <CharComponent charindex={'INDEX'} char='c' />
      */
      }

      {inputState.split('').map ( (chr, index) => {
          console.log('foreach:'+ chr);
          return <CharComponent key={index} 
                    charindex={index} char={chr} 
                    clicked={() => charClickHandler(chr, index)} />
          {/*
          onclick={()=>charClickHandler('a', 666)
          onClick={() => charClickHandler(chr, index)}
        */}
        }
      )}

    </div>
  );
}

export default App;
