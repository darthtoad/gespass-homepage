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
                            <Row className="row">
                                <Col md={3}>
                                    <h4><a href="https://github.com/darthtoad/WordUp">Word Up</a></h4>
                                    <p>An Android app for looking up words</p>
                                </Col>
                                <Col md={3}>
                                    <h4><a href="https://github.com/darthtoad/angular-adventure">Angular Adventure</a></h4>
                                    <p>An adventure written in Angular</p>
                                </Col>
                                <Col md={3}>
                                    <h4><a href="https://github.com/darthtoad/zoo-tracker">Zoo Tracker</a></h4>
                                    <p>An app that keeps track of animals in the Quahog Zoo</p>
                                </Col>
                            </Row>
                            <Row className="row">
                                <Col md={3}>
                                    <h4><a href="https://github.com/darthtoad/Thomas-Agocci">Thomas Agocci</a></h4>
                                    <p>A Tamagachi-type app where you take care of an old man named Thomas Agocci</p>
                                </Col>
                                <Col md={3}>
                                    <h4><a href="https://github.com/darthtoad/Good-Business-Tracker">Good Business Tracker</a></h4>
                                    <p>A Java/Spark backend that tracks businesses that work with charities</p>
                                </Col>
                                <Col md={3}>
                                    <h4><a href="https://github.com/darthtoad/RemoteClassroomOpenTok">Remote Classroom</a></h4>
                                    <p>An Android app for teaching foreign languages</p>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </Bounce>
            </div>
        )
    }
}