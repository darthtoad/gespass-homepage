import React, { Component } from 'react';
import './App.css';
import Pictures from './components/Pictures/Pictures';
import WelcomeText from './components/WelcomeText/WelcomeText';
import GridNav from './components/GridNav/GridNav';
import { Jumbotron } from 'react-bootstrap';

class App extends Component {
  hideIntro = () => {
    this.setState({showIntro: false});
  }

  state = {
    showIntro: true,
  }
  constructor(props) {
    super(props);
  }

  render() {
    let show = this.state.showIntro;
    return (
      <div className="App">
        {show &&
          <Jumbotron className="Jumbotron">
            <Pictures />
            <WelcomeText />
          </Jumbotron>
        }
        <GridNav show={this.showIntro} hide={this.hideIntro} />
      </div>
    );
  }
}

export default App;
