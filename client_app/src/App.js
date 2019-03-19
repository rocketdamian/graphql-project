import React, { Component } from 'react';
import './App.css';

import UsersList from './components/UsersList';
import AddUser from './components/AddUser';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="add-user">
            <AddUser></AddUser>
          </div>
          <div className="user-list">
            <UsersList></UsersList>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
