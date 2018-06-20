import React, { Component } from 'react';
import './styles.css';
import Bounce from 'react-reveal/Bounce';
import { Jumbotron } from 'react-bootstrap';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Bounce>
                    <Jumbotron className="jumbotron">
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
                        <p>US: +1 412-335-7592</p>
                        <p>Mexico: +52 444-825-7121</p>
                    </Jumbotron>
                </Bounce>
            </div>
        )
    }
}