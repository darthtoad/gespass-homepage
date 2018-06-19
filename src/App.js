import React, { Component } from 'react';
import './App.css';
import Pictures from './components/Pictures/Pictures';
import WelcomeText from './components/WelcomeText/WelcomeText';
import GridNav from './components/GridNav/GridNav';
import { Jumbotron } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
  }



  showProjects = () => {
    this.setState({show: "projects"});
  }

  render() {
    return (
      <div className="App">
        <Jumbotron className="Jumbotron">
          <Pictures />
          <WelcomeText />
        </Jumbotron>
        <GridNav />
      </div>
    );
  }
}

export default App;
