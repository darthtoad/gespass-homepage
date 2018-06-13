import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pictures from './components/Pictures';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Pictures />
      </div>
    );
  }
}

export default App;
