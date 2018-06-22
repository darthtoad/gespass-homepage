import React, { Component } from 'react';
import './styles.css';
import Bounce from 'react-reveal/Bounce';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils/';
import { jumbotron } from './../../assets/styles/bootstrapStyles.js'

export default class About extends Component {
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

    renderContentTop() {
        return (
            <div>
                <h1>About me</h1>
                <p className="about">My name is Sam. I am currently looking for a position as a developer. I graduated from the Android/Java/Javascript track at Epicodus in Portland, OR. I'm currently with my girlfriend in Mexico, but I'm willing to take a job anywhere. We have three dogs: Olivia, Felipe, and Mafalda. They are very cute! My favorite food is barbacoa de borrego.</p>
            </div>
        )
    }
    
    state = {
        width: 0,
        height: 0
    }

    render() {
        return (
            <div>
                <Bounce>
                    { this.state.width > 500 ?
                        <Jumbotron>
                            {this.renderContentTop()}
                        </Jumbotron> :
                        <Jumbotron style={jumbotron} bsStyle="custom">
                            {this.renderContentTop()}
                        </Jumbotron>
                    }
                </Bounce>
                <Bounce>
                    { this.state.width > 500 ?
                        <Jumbotron>
                            <h2>More about me</h2>
                            <Grid>
                                <h3>Why I like coding</h3>
                                <Row>
                                    <Col md={3}>
                                        <ul className="list">
                                            <li>I like figuring out problems</li>
                                            <li>I believe that technology, when used correctly, can make the world a better place</li>
                                            <li>I have a passion for learning</li>
                                        </ul>
                                    </Col>
                                    <Col md={3}>
                                        <ul className="list">
                                            <li>I feel great when I create something</li>
                                            <li>It takes advantage of my skills, one example being my ability to pay attention to detail.</li>
                                        </ul>
                                    </Col>
                                    <Col md={3}>
                                        <br />
                                        <ul className="list">
                                            <li>It's fun to work with people to build something new and unique</li>
                                        </ul>
                                    </Col>
                                </Row>
                                <h3>Favorite bands and artists</h3>
                                <Row>
                                    <Col md={3}>
                                        <ul className="list">
                                            <li>The Grateful Dead</li>
                                            <li>John Coltrane</li>
                                            <li>Daniel Johnston</li>
                                        </ul>
                                    </Col>
                                    <Col md={3}>
                                        <ul className="list">
                                            <li>Aesop Rock</li>
                                            <li>Prince</li>
                                            <li>Herbie Hancock</li>
                                        </ul>
                                    </Col>
                                    <Col md={3}>
                                        <ul className="list">
                                            <li>King Gizzard and the Lizard Wizard</li>
                                            <li>David Grisman</li>
                                            <li>P-Funk</li>
                                        </ul>
                                    </Col>
                                </Row>
                                <h3>Instruments I play in order of how well I play them</h3>
                                <Row>
                                    <ol className="list">
                                        <Col md={4}>
                                            <li>Mandolin</li>
                                            <li>Guitar</li>
                                            <li>Ukulele</li>
                                        </Col>
                                        <Col md={4}>
                                            <li>Cuatro</li>
                                            <li>Bass</li>
                                            <li>Banjo</li>
                                        </Col>
                                        <Col md={4}>
                                            <li>Baglamas</li>
                                            <li>Oud</li>
                                            <li>Violin</li>
                                        </Col>
                                    </ol>
                                </Row>
                                <h3>Recommended reading list</h3>
                                <Row>
                                    <Col md={4}>
                                        <ul className="list">
                                            <li>Plato - The Republic</li>
                                            <li>Aristotle - Ethics</li>
                                            <li>Polybius - Histories</li>
                                        </ul>
                                    </Col>
                                    <Col md={4}>
                                        <ul className="list">
                                            <li>Plutarch - Lives</li>
                                            <li>Lao Tsu - Taoa Te Ching</li>
                                            <li>The Buddha - The Dhammapada</li>
                                        </ul>
                                    </Col>
                                    <Col md={4}>
                                        <ul className="list">
                                            <li>Martin Buber - I and Thou</li>
                                            <li>Phillip Roth - The Plot Against America</li>
                                            <li>Alan More - Watchmen</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Grid>
                        </Jumbotron> : 
                        <Jumbotron style={jumbotron} bsStyle="custom">
                            <h2>More about me</h2>
                            <h3>Why I like coding</h3>
                            <ul className="list">
                                <li>I like figuring out problems</li>
                                <li>I believe that technology, when used correctly, can make the world a better place</li>
                                <li>I have a passion for learning</li>
                                <li>I feel great when I create something</li>
                                <li>It takes advantage of my skills, one example being my ability to pay attention to detail.</li>
                                <li>It's fun to work with people to build something new and unique</li>
                            </ul>
                            <h3>Favorite bands and artists</h3>
                            <ul className="list">
                                <li>The Grateful Dead</li>
                                <li>John Coltrane</li>
                                <li>Daniel Johnston</li>
                                <li>Aesop Rock</li>
                                <li>Prince</li>
                                <li>Herbie Hancock</li>
                                <li>King Gizzard and the Lizard Wizard</li>
                                <li>David Grisman</li>
                                <li>P-Funk</li>
                            </ul>
                            <h3>Instruments I play in order of how well I play them</h3>
                            <ol className="list">
                                <li>Mandolin</li>
                                <li>Guitar</li>
                                <li>Ukulele</li>
                                <li>Cuatro</li>
                                <li>Bass</li>
                                <li>Banjo</li>
                                <li>Baglamas</li>
                                <li>Oud</li>
                                <li>Violin</li>
                            </ol>
                            <h3>Recommended reading list</h3>
                            <ul className="list">
                                <li>Plato - The Republic</li>
                                <li>Aristotle - Ethics</li>
                                <li>Polybius - Histories</li>
                                <li>Plutarch - Lives</li>
                                <li>Lao Tsu - Taoa Te Ching</li>
                                <li>The Buddha - The Dhammapada</li>
                                <li>Martin Buber - I and Thou</li>
                                <li>Phillip Roth - The Plot Against America</li>
                                <li>Alan More - Watchmen</li>
                            </ul>
                        </Jumbotron>
                    }
                </Bounce>
            </div>
        )
    }
}