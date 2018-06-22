import React, { Component } from 'react';
import './styles.css';
import Fade from 'react-reveal';
import { Grid, Row, Col } from 'react-bootstrap';
import Projects from './../Projects/Projects';
import About from './../About/About';
import Contact from './../Contact/Contact';
import Resume from './../Resume/Resume';


export default class GridNav extends Component {
          
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }  

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

    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
  
    state = {
        show: "",
        width: 0,
        height: 0
    }

    render() {
        return (
            <div>
                { this.state.width < 400 &&
                    [   this.state.show === 'projects' &&
                            <div key={0}>
                                <Projects />
                            </div>,            
                        this.state.show === "about" &&
                            <div key={1}>
                                <About />
                            </div>,
                        this.state.show === "resume" &&
                            <div key={2}>
                                <Resume />
                            </div>,
                        this.state.show === "contact" &&
                            <div key={3}>
                                <Contact />
                            </div>
                    ]
                }
                <Fade bottom>
                    { this.state.width >= 400 ?
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
                        </Grid> :
                        <div>
                            <p className="small-grid" onClick={this.showProjects}>Projects</p>
                            <p className="small-grid" onClick={this.showAbout}>About Me</p>
                            <p className="small-grid" onClick={this.showResume}>My Resume</p>
                            <p className="small-grid" onClick={this.showContact}>Contact</p>
                        </div>
                    }
                </Fade>
                { this.state.width >= 400 &&
                    [   this.state.show === 'projects' &&
                            <div key={0}>
                                <Projects />
                            </div>,            
                        this.state.show === "about" &&
                            <div key={1}>
                                <About />
                            </div>,
                        this.state.show === "resume" &&
                            <div key={2}>
                                <Resume />
                            </div>,
                        this.state.show === "contact" &&
                            <div key={3}>
                                <Contact />
                            </div>
                    ]
                }
            </div>
        )
    }
}