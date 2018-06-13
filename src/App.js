import React, { Component } from 'react';
import './App.css';
import Pictures from './components/Pictures';
import { Jumbotron } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Jumbotron>
          <Pictures />
          <h1>Hi! My name is Sam Gespass and this is my website!</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
