import React, { Component } from 'react';

import './style/App.css';

import Account from './containers/Account';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Westbury Club</h1>
        </header>
        <Account/>
      </div>
    );
  }
}

export default App;
