import React, { Component } from 'react';
import './styles.css';
import Bounce from 'react-reveal/Bounce';

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Bounce>
                    SAMUEL GESPASS

                    +1 412 335 7592 Samuel.Gespass@gmail.com LinkedIn: /sam-gespass Github: /darthtoad

                    SUMMARY

                    Junior Developer currently working with Java, Android, Javascript, Angular, and React, bringing communication and interpersonal skills from previous work as an ESL and history teacher

                    SKILLS

                    Java, HTML, CSS, Javascript, jQuery, PostgreSQL, Android, React, React Native, Angular, Firebase, Bootstrap, Materialize, Git, Github, Spark Web Framework, Microsoft Office

                    PROJECTS

                    Word Up - https://github.com/darthtoad/WordUp
                    An Android app that gives information about words and lets users save their favorite words

                    Remote Classroom - https://github.com/darthtoad/RemoteClassroomOpenTok
                    An Android app for teaching foreign languages

                    EDUCATION

                    Epicodus, Portland, OR						     November 2017 - June 2018
                    Java/JavaScript/Android web development certification
                    Gained over 1000+ hours of pair-programming-centered design and coding experience
                    Acquired a certificate in web development with a focus on Java and Android as well as material in Javascript using tools such as Bootstrap, jQuery, HTML/CSS and Angular
                    Learned best practices in coding and in version control with Git/Github

                    School of Teaching ESL, Seattle, WA					           September 2015
                    TESOL Certificate (in cooperation with Seattle Pacific University)
                    120 hours of instruction and 6 hours of field experience

                    St. John’s College, Annapolis, MD							           	    2009
                    Bachelor of Arts Degree in Liberal Arts
                    Comprehensive classical curriculum, including philosophy, Ancient Greek, history of math and science, music, and literature.

                    EXPERIENCE

                    Mobile Development Intern							           April - June 2018
                    Hot Pepper Studios, Portland, Oregon
                    Develop a React Native app using Expo
                    Collaborate with coworkers using Git and BitBucket

                    English as a Foreign Language Instructor			         January 2017 – July 2017
                    Linguatec, San Luis Potosi, Mexico
                    Develop and deliver lesson plans that utilize a broad range of teaching techniques and strategies
                    Adapt curriculum to provide instruction for individuals and small groups of students
                </Bounce>
            </div>
        )
    }
}