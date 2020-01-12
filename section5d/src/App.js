import React from 'react';
import './App.css';
import Parent1 from './components/Parent1';
import Parent2 from './components/Parent2';
import Child from './components/Child';

function App() {
  return (
    <div className="App">
      <Parent1/>
      
      <Parent2/>

      <div>child by itself with no Parent (default rules for .Child should win):</div>
      <Child/>
    </div>
  );
}

export default App;
