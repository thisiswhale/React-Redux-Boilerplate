import React, { Component } from 'react';
import './App.css';

import List from './features/list';

export default function App(props) extends Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}
