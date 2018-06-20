import React, { Component } from 'react';
import './styles.css';
import Bounce from 'react-reveal/Bounce';
import { Jumbotron } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <div>
                <Bounce>
                    <Jumbotron className="jumbotron">
                        I LOVE MY GIRLFRIEND!!!!
                    </Jumbotron>
                </Bounce>
            </div>
        )
    }
}