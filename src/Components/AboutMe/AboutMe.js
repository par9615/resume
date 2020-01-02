import React from 'react';
import './AboutMe.css';
import FlipCard from '../FlipCard/FlipCard.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import hpLogo from '../../../assets/images/hp-logo.png';
import argesLogo from '../../../assets/images/arges-logo.png'
var jobs = [
    {
        image: hpLogo,
        title: "HP Inc.",
        subtitle: "Physical Claims Intern",
        description: "Fugiat laboris velit duis magna commodo veniam eu sunt mollit qui. Ut sit aliqua reprehenderit quis qui in in amet voluptate."
    },
    {
        image: argesLogo,
        title: "Arges",
        subtitle: "Mobile Developer",
        description: "Fugiat laboris velit duis magna commodo veniam eu sunt mollit qui. Ut sit aliqua reprehenderit quis qui in in amet voluptate."
    },
    {
        title: "Just be patient",
        description: '"El tiempo no se puede medir en días, la forma en que se mide el dinero en pesos y centavos, porque todos los pesos son iguales, mientras que cada día, tal vez cada hora, es diferente."'
    }
];

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    buildFlipCards() {
        return jobs.map((job) => (
            <FlipCard {...job}></FlipCard>
        ));
    }

    render() {
        return (
            <div className="about-me">
                <div id="upper">
                    <div id="left">
                        <img id="portrait" src="http://lorempixel.com/384/512/"></img>
                    </div>
                    <div id="right">
                        <div id="description">
                            <h1>Who am I?</h1>
                            <p>I'm dedicated, versatile, curious computer systems graduate from ITESO and software engineer. </p>
                        </div>
                        <div id="programming-languages">
                            <h2>Programming languages</h2>
                            <h4>C/C++</h4>
                            <ProgressBar progress="85"></ProgressBar>
                            <h4>JavaScript</h4>
                            <ProgressBar progress="60"></ProgressBar>
                            <h4>Python</h4>
                            <ProgressBar progress="65"></ProgressBar>
                            <h4>SQL</h4>
                            <ProgressBar progress="65"></ProgressBar>


                            <h2>Frameworks & tools</h2>
                            <h4>Flutter</h4>
                            <ProgressBar progress="80"></ProgressBar>
                            <h4>React</h4>
                            <ProgressBar progress="50"></ProgressBar>

                        </div>
                    </div>
                </div>
                <div id="lower">
                    <div id="experience">
                        <h1>Experience</h1>
                        <div id="experience-list">
                            {this.buildFlipCards()}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutMe;