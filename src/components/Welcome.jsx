import React, { Component } from 'react';
import sam1 from '../assets/images/Sam1.jpeg';
import sam2 from '../assets/images/Sam2.jpeg';
import sam3 from '../assets/images/Sam3.jpeg'
import styles from '../assets/styles/styles.css'

export default class Welcome extends Component {
    changeImage() {
        setInterval(() => {
            let image = this.state.image;
            if (this.state.image < 3) {
                image++;
            } else {
                image = 1;
            }
            this.setState({image: image});
        }, 3000);
    }

    constructor(props) {
        super(props);
        this.state = {
            image: 1,
        }
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
                <img src={sam1} className="sam1"/>
            </div>
        )
    }
}

export class Sam2 extends Component {
    render () {
        return (
            <div className="samImageContainer">
                <img src={sam2} className="sam2"/>
            </div>        
        )
    }
}

export class Sam3 extends Component {
    render() {
        return (
            <div className="samImageContainer">
                <img src={sam3} className="sam3" height="200" width="200" />
            </div>
        )
    }
}