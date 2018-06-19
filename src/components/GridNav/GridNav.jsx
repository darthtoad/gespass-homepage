import React, { Component } from 'react';
import './styles.css';
import Fade from 'react-reveal';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';


export default class GridNav extends Component {
    showProjects = () => {
        this.setState({show: "projects"});
    }

    showAbout = () => {
        this.setState({show: "about"});
    }
    
    showResume = () => {
        this.setState({show: "resume"});
    }

    showContact = () => {
        this.setState({show: "contact"})
    }

    constructor(props) {
        super(props);
    }
  
    state = {
        show: "",
    }

    render() {
        return (
            <div>
                <Fade bottom>
                    <Grid className="grid">
                        <Row>
                            <Col md={3}>
                                <p className="inner-grid" onClick={this.showProjects}>Projects</p>
                            </Col>
                            <Col md={3}>
                                <p className="inner-grid" onClick={this.showAbout}>About Me</p>
                            </Col>
                            <Col md={3}>
                                <p className="inner-grid" onClick={this.showResume}>My Resume</p>
                            </Col>
                            <Col md={3}>
                                <p className="inner-grid" onClick={this.showContact}>Contact</p>
                            </Col>
                        </Row>
                    </Grid>
                </Fade>
                {
                    this.state.show === 'projects' &&
                        <p>Poop</p>            
                }
                {
                    this.state.show === "about" &&
                        <p>Pee</p>
                }
                {
                    this.state.show === "resume" &&
                        <p>Fart</p>
                }
                {
                    this.state.show === "contact" &&
                        <p>Fuck</p>
                }
            </div>
        )
    }
}