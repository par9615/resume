import React from 'react';
import './Portfolio.css';
import Carousel from '../Carousel/Carousel.js';
import reactLogo from '../../../assets/images/react.png';

const projects = [
    {
        title: "Project A",
        description: "Non consequat cupidatat adipisicing cupidatat ea proident labore dolore excepteur reprehenderit officia amet. Minim occaecat nulla sit enim eiusmod. Aliquip anim nisi aute nisi irure sint deserunt aliquip anim labore anim fugiat. Ipsum in Lorem sunt esse ut non esse do dolor velit consectetur excepteur duis. Anim esse aute proident labore nulla officia duis eiusmod. Non eu commodo aute veniam nulla laboris laboris sunt dolor irure eu pariatur. Proident pariatur minim qui velit laboris enim veniam nulla sint aliqua consequat excepteur.",
        image: "http://lorempixel.com/512/512/",
        tools: [
            {
                name: "React",
                image: reactLogo
            },
            {
                name: "CSS",
                image: "http://lorempixel.com/512/512/"
            }

        ]
    },
    {
        title: "Project B",
        description: "Laborum voluptate voluptate in elit. Adipisicing labore nostrud commodo aute officia et ex occaecat voluptate enim occaecat ipsum. Incididunt velit ullamco ad commodo. Nostrud labore deserunt elit minim.",
        image: "http://lorempixel.com/512/512/",
        tools: [
            {
                name: "Flutter",
                image: "http://lorempixel.com/512/512/"
            },
            {
                name: "BLoC",
                image: "http://lorempixel.com/512/512/"
            },
            {
                name: "Dart",
                image: "http://lorempixel.com/512/512/"
            }



        ]

    }
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