import React from 'react';
import './AboutMe.css';
import bigImage from '../../../assets/images/big-image.jpg';

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="image-container">
                <img className="image" src={bigImage} height="250px"></img>
            </div>
        );
    }
}

class DescriptionContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="description-container">
                <h1 id="title">Miguel Hernández</h1>
                <h2 id="subtitle">Developer</h2>
                <p id="description">
                    Ad laborum nulla magna veniam ipsum ex voluptate cillum. Occaecat ex cillum aliquip quis quis nisi eiusmod duis ipsum aliqua labore amet irure. Anim sit amet incididunt ea.
                </p>
            </div>
        );
    }
}


class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-me">
                <ImageContainer/>
                <DescriptionContainer/>
            </div>
        )
    }

}

export default AboutMe;