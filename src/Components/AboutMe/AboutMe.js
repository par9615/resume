import React from 'react';
import './AboutMe.css';
import FlipCard from '../FlipCard/FlipCard.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import hpLogo from '../../../assets/images/hp-logo.png';
import argesLogo from '../../../assets/images/arges-logo.png';
import me from '../../../assets/images/me.jpg';

var jobs = [
    {
        image: hpLogo,
        title: "HP Inc.",
        subtitle: "Physical Claims Intern",
        description: "Implemented web scrapers to get documents, reports, and perform automatic tasks. Additionally, created a web page to download documents and track their status."
    },
    {
        image: argesLogo,
        title: "Arges",
        subtitle: "Mobile Developer",
        description: "Developed a soccer betting app for iOS. Currently, I'm working on a hybrid app where I use Flutter for the UI."
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
            <div className="about-me" id="about-me">
                <div id="upper">
                    <div id="left">
                        <img id="portrait" src={me}></img>
                    </div>
                    <div id="right">
                        <div id="description">
                            <h1>Who am I?</h1>
                            <p>I'm dedicated, versatile, curious software engineer graduate from ITESO. I strive to write cleaner and more optimized code in each product I collaborate in, which drives me to always keep discovering and learning new tools and use them as best I can.</p>
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