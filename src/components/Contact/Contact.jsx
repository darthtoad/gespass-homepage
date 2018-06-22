import React, { Component } from 'react';
import './styles.css';
import Bounce from 'react-reveal/Bounce';
import { Jumbotron } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils/';
import { jumbotron } from './../../assets/styles/bootstrapStyles.js'

export default class Contact extends Component {
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
                { this.state.width > 500 ?
                    <Bounce>
                        <Jumbotron>
                            <a href="mailto:samuel.gespass@gmail.com">Email me</a>
                            <br />
                            <br />
                            <a href="https://www.linkedin.com/in/sam-gespass/">LinkedIn</a>
                            <br />
                            <br />
                            <a href="https://github.com/darthtoad">Github</a>
                            <br />
                            <br />
                            <hr />
                            <p>Phone:</p>
                            <a href="tel:+14124457592"><p>US: +1 412-335-7592</p></a>
                            <a href="tel:+524448257121"><p>Mexico: +52 444-825-7121</p></a>
                        </Jumbotron>
                    </Bounce>
                    :
                    <Bounce>
                        <Jumbotron style={jumbotron} bsStyle="custom">
                            <a href="mailto:samuel.gespass@gmail.com">Email me</a>
                            <br />
                            <br />
                            <a href="https://www.linkedin.com/in/sam-gespass/">LinkedIn</a>
                            <br />
                            <br />
                            <a href="https://github.com/darthtoad">Github</a>
                            <br />
                            <br />
                            <hr />
                            <p>Phone:</p>
                            <a href="tel:+14124457592"><p>US: +1 412-335-7592</p></a>
                            <a href="tel:+524448257121"><p>Mexico: +52 444-825-7121</p></a>
                        </Jumbotron>
                    </Bounce>
                }
            </div>
        )
    }
}