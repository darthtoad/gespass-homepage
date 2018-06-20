import React, { Component } from 'react';
import './styles.css';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';

export default class Projects extends Component {
    
    render() {
        return (
            <div>
                <Bounce>
                    <Jumbotron className="jumbotron">
                        <h1>Here are some of my projects</h1>
                        <br />
                        <a className="github" href="https://github.com/darthtoad"><h3>See my Github</h3></a>
                    </Jumbotron>
                    <div className="projects">
                        <Grid>
                            <Row>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </Bounce>
            </div>
        )
    }
}