import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

const App = (props) => {

  const [usernameState, setUsernameState] = useState({
    username: 'my_username_666'
  });
  console.log(usernameState);


  const changeUsernameHandler = (event) => {
    setUsernameState(
      {
        ...usernameState,
        username: event.target.value //"your_username_333"
      }
    );
  }

  return (
    <div className="App">
      <UserInput  username={usernameState.username}
        changeUsername={changeUsernameHandler} />

      <UserOutput username={usernameState.username} />
      <UserOutput username={usernameState.username} />
    </div>
  );
}

export default App;
