import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';


class App extends Component {

  state = {
    inputstate: 'initstate'
  };

  
  inputChangeHandler = (event) => {
    console.log('inputChangeHandler');
    this.setState({
      ...this.state,
      inputstate: event.target.value
    });
  }

  charClickHandler = (chr, index_to_delete) => {
    console.log(`charClickHandler[${index_to_delete}]: ${chr}`);
    const chars_arr = this.state.inputstate.split(''); //make a copy vs reference (above is a pointer and mutating state directly which isn't good)
    chars_arr.splice(index_to_delete,1);
    this.setState({ inputstate: chars_arr.join('')});
  }

  render() {
    const inputState = this.state.inputstate;
    console.log(this.state);
    
    return (
      <div className="App">
        <input value={inputState} onChange={this.inputChangeHandler} />
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
                      clicked={() => this.charClickHandler(chr, index)} />
          }
        )}
  
      </div>
    );
  }
}

export default App;
