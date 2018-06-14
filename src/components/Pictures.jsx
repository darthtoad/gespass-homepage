import React, { Component } from 'react';
import sam1 from '../assets/images/Sam1.jpeg';
import sam2 from '../assets/images/Sam2.jpeg';
import sam3 from '../assets/images/Sam3.jpeg';
import styles from '../assets/styles/styles.css';
import Fade from 'react-reveal';

const images = [
    sam1,
    sam2,
    sam3
]

export default class Pictures extends Component {

    changeImage() { setInterval(() =>{
            if (this.state.image === images.length - 1) {
                this.setState({image: 0})
            } else {
                this.setState({ image: this.state.image + 1})
            }}, 1000
        )
    }

    state = {
                image: 0
            }

    constructor(props) {
        super(props);
        this.changeImage = this.changeImage.bind(this);
        this.changeImage();
    }

    render() {
        if (this.state.image === 1) {
            return <Sam1 />
        } else if (this.state.image === 2) {
            return <Sam2 />
        } else {
            return <Sam3 />
        }
    }
}

export class Sam1 extends Component {
    render () {
        return (
            <div className="samImageContainer">
                <Fade left>
                    <img src={sam1} className="sam1"/>
                </Fade>
            </div>
        )
    }
}

export class Sam2 extends Component {
    render () {
        return (
            <div className="samImageContainer">
                <Fade top>
                    <img src={sam2} className="sam2"/>
                </Fade>
            </div>        
        )
    }
}

export class Sam3 extends Component {
    render() {
        return (
            <div className="samImageContainer">
                <Fade right>
                    <img src={sam3} className="sam3" height="200" width="200" />
                </Fade>
            </div>
        )
    }
}