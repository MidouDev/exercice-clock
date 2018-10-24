import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Switch from './Switch';
import './bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch />
      </div>
    );
  }
}

export default App;
