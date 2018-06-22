import React, { Component } from 'react';
import './styles.css';
import Bounce from 'react-reveal/Bounce';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils/';
import { jumbotron } from './../../assets/styles/bootstrapStyles.js'

export default class Resume extends Component {
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
        width: 0,
        height: 0
    }

    render() {
        return (
            <div>
                <Bounce>
                    { this.state.width >= 500 ?
                        <div>
                            <Jumbotron>
                                <h1>SAMUEL GESPASS</h1>

                                <h2>SUMMARY</h2>

                                <p className="text summary-text">Junior Developer currently working with Java, Android, Javascript, Angular, and React, bringing communication and interpersonal skills from previous work as an ESL and history teacher</p>

                                <h3>SKILLS</h3>

                                <ul className="text list">
                                    <Grid>
                                        <Row>
                                            <Col md={3}>
                                                <li>Java</li>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>Javascript</li>
                                            </Col>
                                            <Col md={3}>
                                                <li>jQuery</li>
                                                <li>Android</li>
                                                <li>React</li>
                                                <li>React Native</li>
                                            </Col>
                                            <Col md={3}>
                                                <li>PostgreSQL</li>
                                                <li>Angular</li>
                                                <li>Firebase</li>
                                                <li>Bootstrap</li>
                                            </Col>
                                            <Col md={3}>
                                                <li>Materialize</li>
                                                <li>Git</li>
                                                <li>Github</li>
                                                <li>Spark Web Framework</li>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </ul>


                                <h3>EXPERIENCE</h3>

                                <h4>Mobile Development Intern</h4>	
                                <h4>April - June 2018</h4>
                                <h4>Hot Pepper Studios, Portland, Oregon</h4>
                                <p className="text">Develop a React Native app using Expo
                                Collaborate with coworkers using Git and BitBucket</p>

                                <h4>English as a Foreign Language Instructor</h4>
                                <h4>January 2017 – July 2017</h4>
                                <h4>Linguatec, San Luis Potosi, Mexico</h4>
                                <p className="text">Develop and deliver lesson plans that utilize a broad range of teaching techniques and strategies</p>
                                <p className="text">Adapt curriculum to provide instruction for individuals and small groups of students</p>

                                <h3>EDUCATION</h3>

                                <h4>Epicodus, Portland, OR</h4>			<h4>June 2018</h4>
                                <h5>Java/JavaScript/Android web development certification</h5>
                                <ul className="text list">
                                    <li>Gained over 1000+ hours of pair-programming-centered design and coding experience</li>
                                    <li>Acquired a certificate in web development with a focus on Java and Android as well as material in Javascript using tools such as Bootstrap, jQuery, HTML/CSS and Angular</li>
                                    <li>Learned best practices in coding and in version control with Git/Github</li>
                                </ul>

                                <h4>School of Teaching ESL, Seattle, WA</h4>
                                <h4>September 2015</h4>
                                <h5>TESOL Certificate (in cooperation with Seattle Pacific University)</h5>
                                <p className="text">120 hours of instruction and 6 hours of field experience</p>

                                <h4>St. John’s College, Annapolis, MD</h4>							          <h4>2009</h4>
                                <h5>Bachelor of Arts Degree in Liberal Arts</h5>
                                <p className="text">Comprehensive classical curriculum, including philosophy, Ancient Greek, history of math and science, music, and literature</p>
                            </Jumbotron>
                        </div>
                        :
                        <div>
                            <Jumbotron style={jumbotron} bsStyle="custom">
                                <h1>SAMUEL GESPASS</h1>

                                <h2>SUMMARY</h2>

                                <p className="text summary-text">Junior Developer currently working with Java, Android, Javascript, Angular, and React, bringing communication and interpersonal skills from previous work as an ESL and history teacher</p>

                                <h3>SKILLS</h3>

                                <ul className="text list">
                                    <Grid>
                                        <Row>
                                            <Col md={3}>
                                                <li>Java</li>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>Javascript</li>
                                            </Col>
                                            <Col md={3}>
                                                <li>jQuery</li>
                                                <li>Android</li>
                                                <li>React</li>
                                                <li>React Native</li>
                                            </Col>
                                            <Col md={3}>
                                                <li>PostgreSQL</li>
                                                <li>Angular</li>
                                                <li>Firebase</li>
                                                <li>Bootstrap</li>
                                            </Col>
                                            <Col md={3}>
                                                <li>Materialize</li>
                                                <li>Git</li>
                                                <li>Github</li>
                                                <li>Spark Web Framework</li>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </ul>


                                <h3>EXPERIENCE</h3>

                                <h4>Mobile Development Intern</h4>	
                                <h4>April - June 2018</h4>
                                <h4>Hot Pepper Studios, Portland, Oregon</h4>
                                <p className="text">Develop a React Native app using Expo
                                Collaborate with coworkers using Git and BitBucket</p>

                                <h4>English as a Foreign Language Instructor</h4>
                                <h4>January 2017 – July 2017</h4>
                                <h4>Linguatec, San Luis Potosi, Mexico</h4>
                                <p className="text">Develop and deliver lesson plans that utilize a broad range of teaching techniques and strategies</p>
                                <p className="text">Adapt curriculum to provide instruction for individuals and small groups of students</p>

                                <h3>EDUCATION</h3>

                                <h4>Epicodus, Portland, OR</h4>			<h4>June 2018</h4>
                                <h5>Java/JavaScript/Android web development certification</h5>
                                <ul className="text list">
                                    <li>Gained over 1000+ hours of pair-programming-centered design and coding experience</li>
                                    <li>Acquired a certificate in web development with a focus on Java and Android as well as material in Javascript using tools such as Bootstrap, jQuery, HTML/CSS and Angular</li>
                                    <li>Learned best practices in coding and in version control with Git/Github</li>
                                </ul>

                                <h4>School of Teaching ESL, Seattle, WA</h4>
                                <h4>September 2015</h4>
                                <h5>TESOL Certificate (in cooperation with Seattle Pacific University)</h5>
                                <p className="text">120 hours of instruction and 6 hours of field experience</p>

                                <h4>St. John’s College, Annapolis, MD</h4>							          <h4>2009</h4>
                                <h5>Bachelor of Arts Degree in Liberal Arts</h5>
                                <p className="text">Comprehensive classical curriculum, including philosophy, Ancient Greek, history of math and science, music, and literature</p>
                            </Jumbotron>
                        </div>
                    }
                </Bounce>
            </div>
        )
    }
}