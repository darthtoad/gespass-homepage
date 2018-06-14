import React, { Component } from 'react';
import './App.css';
import Pictures from './components/Pictures/Pictures';
import WelcomeText from './components/WelcomeText/WelcomeText';
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
        <Jumbotron className="Jumbotron">
          <Pictures />
          <WelcomeText />
        </Jumbotron>
      </div>
    );
  }
}

export default App;
