import React, { Component } from 'react';
import './App.css';
import Pictures from './components/Pictures/Pictures';
import WelcomeText from './components/WelcomeText/WelcomeText';
import GridNav from './components/GridNav/GridNav';
import { Jumbotron } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils/';
import { jumbotron } from './assets/styles/bootstrapStyles.js'

class App extends Component {
  hideIntro = () => {
    this.setState({showIntro: false});
  }

  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    if (this.state.width <= 500) {
      bootstrapUtils.addStyle(Jumbotron, 'custom');
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }  

  state = {
    showIntro: true,
    width: 0,
    height: 0
  }

  render() {
    let show = this.state.showIntro;
    let width = this.state.width;
    return (
      <div className="App">
        {show &&
          [width < 501 ? 
            <div key={0}>
              <Jumbotron style={jumbotron} bsStyle="custom">
                <Pictures />
                <WelcomeText />
              </Jumbotron>
            </div> :
            <div key={1}>
              <Jumbotron>
                <Pictures />
                <WelcomeText />
              </Jumbotron>
            </div>
          ]
        }
        <GridNav hide={this.hideIntro} />
      </div>
    );
  }
}

export default App;
