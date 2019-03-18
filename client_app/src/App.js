import React, { Component } from 'react';
import './App.css';

import UsersList from './components/UsersList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UsersList></UsersList>
        </header>
      </div>
    );
  }
}

export default App;
