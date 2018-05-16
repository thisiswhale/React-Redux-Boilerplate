import React, { Component } from 'react';
import './App.css';

import List from './features/list';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}
