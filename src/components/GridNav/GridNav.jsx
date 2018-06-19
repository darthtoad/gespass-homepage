import React, { Component } from 'react';
import './styles.css';
import Fade from 'react-reveal';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';


export default class GridNav extends Component {
    constructor(props) {
        super(props);
    }
  
    state = {
        show: "",
    }

    render() {
        return (
        <Fade bottom>
            <Grid>
                <Row className="show-grid">
                <Col md={3}>
                    <p onClick={this.showProjects}>Projects</p>
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

        )
    }
}