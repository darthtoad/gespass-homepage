import React, { Component } from 'react';
import './styles.css';
import Bounce from 'react-reveal/Bounce';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Bounce>
                    <a href="mailto:samuel.gespass@gmail.com">Email me</a>
                    <a href="https://www.linkedin.com/in/sam-gespass/">LinkedIn</a>
                    <a href="https://github.com/darthtoad">Github</a>
                    <p>Phone:</p>
                    <p>US: +1 412-335-7592</p>
                    <p>Mexico: +52 444-825-7121</p>
                </Bounce>
            </div>
        )
    }
}