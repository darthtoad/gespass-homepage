import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;
