import React, { Component } from 'react';
import './styles.css';
import Wobble from 'react-reveal/Wobble';

export default class WelcomeText extends Component {

    state = {
        text: 0,
    }

    render() {
        return (
            <Wobble>
                <h1>Hi! My name is Sam Gespass and this is my website!</h1>
            </Wobble>
        )
    }
}