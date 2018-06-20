import React, { Component } from 'react';
import './styles.css';
import Fade from 'react-reveal';
import { Grid, Row, Col } from 'react-bootstrap';
import Projects from './../Projects/Projects';
import About from './../About/About';
import Contact from './../Contact/Contact';
import Resume from './../Resume/Resume';


export default class GridNav extends Component {
    showProjects = () => {
        this.setState({show: "projects"});
        this.props.hide();
    }

    showAbout = () => {
        this.setState({show: "about"});
        this.props.hide();
    }
    
    showResume = () => {
        this.setState({show: "resume"});
        this.props.hide();
    }

    showContact = () => {
        this.setState({show: "contact"})
        this.props.hide();
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
                        <Projects />            
                }
                {
                    this.state.show === "about" &&
                        <About />
                }
                {
                    this.state.show === "resume" &&
                        <Resume />
                }
                {
                    this.state.show === "contact" &&
                        <Contact />
                }
            </div>
        )
    }
}