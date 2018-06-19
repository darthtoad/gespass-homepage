import React, { Component } from 'react';
import './App.css';
import Pictures from './components/Pictures/Pictures';
import WelcomeText from './components/WelcomeText/WelcomeText';
import Fade from 'react-reveal';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

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
        <Fade bottom>
          <Grid>
            <Row className="show-grid">
              <Col md={3}>
                <p>Projects</p>
              </Col>
              <Col md={3}>
                <p>About Me</p>
              </Col>
              <Col md={3}>
                <p>My Resume</p>
              </Col>
              <Col md={3}>
                <p>Contact</p>
              </Col>
            </Row>
          </Grid>
        </Fade>
      </div>
    );
  }
}

export default App;
