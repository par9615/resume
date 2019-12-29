import React from 'react';
import './Portfolio.css';
import Carousel from '../Carousel/Carousel.js';
import reactLogo from '../../../assets/images/react.png';

const projects = [
    {
        title: "Geographic profiling tool",
        description: "Developed a web page which determines the most likely zones in a map where a serial criminal could live, based on the geographic position of their crimes according to te Rossmo's formula",
        image: "http://lorempixel.com/512/512/",
        tools: [
            {
                name: "HTML",
                image: reactLogo
            },
            {
                name: "JavaScript",
                image: "http://lorempixel.com/512/512/"
            },
            {
                name: "CSS",
                image: "http://lorempixel.com/512/512/"
            }

        ]
    },
    {
        title: "Drones control programming language",
        description: "Contribuited in the programming language design by writing the language grammar and took part in the implementation of the parser.",
        image: "http://lorempixel.com/512/512/",
        tools: [
            {
                name: "Python",
                image: "http://lorempixel.com/512/512/"
            },

        ]

    },
    {
        title: "Electrical contractor business database",
        description: "Designed the relational database schema along with stored procedures to support some of the ERP processes.",
        image: "http://lorempixel.com/512/512/",
        tools: [
            {
                name: "SQL",
                image: "http://lorempixel.com/512/512/"
            },

        ]

    },


];

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="portfolio">
                <div>
                    <Carousel projects={projects}></Carousel>
                </div>
            </div>
        )
    }


}

export default Portfolio;