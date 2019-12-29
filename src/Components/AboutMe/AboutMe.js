import React from 'react';
import './AboutMe.css';
import FlipCard from '../FlipCard/FlipCard.js';

var jobs = [
    {
        title: "HP Inc.",
        subtitle: "Physical Claims Intern"

    }
];

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="about-me">
                <div id="left">
                    <img id="portrait" src="http://lorempixel.com/384/512/"></img>
                </div>
                <div id="right">
                    <div id="description">
                        <h2>Who am I?</h2>
                        <p>A young, versatile, curious software developer passionate about learning, just trying to find my path in life.</p>
                    </div>
                    <div id="experience">
                        <h2>Experience</h2>
                        <div id="experience-list">
                            <FlipCard></FlipCard>
                            <FlipCard></FlipCard>
                            <FlipCard></FlipCard>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutMe;