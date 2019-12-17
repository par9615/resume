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
                <img className="image" src={bigImage}></img>
            </div>
        );
    }
}

class DescriptionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentIndex: 0 };
    }

    componentDidMount() {
        setInterval(() => this.incrementIndex(), 5000);
    }

    incrementIndex() {
        console.log(this.state.currentIndex);
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex + 1) % this.props.titles.length
        }));
    }

    render() {
        return (
            <div className="description-container">
                <h4>HELLO</h4>
                <h1 id="title">I'm Miguel Hernández</h1>
                <h2 id="subtitle">{this.props.titles[this.state.currentIndex]}</h2>
                <p id="description">
                    Ad laborum nulla magna veniam ipsum ex voluptate cillum. Occaecat ex cillum aliquip quis quis nisi eiusmod duis ipsum aliqua labore amet irure. Anim sit amet incididunt ea.
                </p>
                <div>
                    <button className="button" id="download-cv">Download CV</button>
                </div>
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
                <ImageContainer />
                <DescriptionContainer titles={["Mobile Developer", "Web Developer", "Dreamer", "Just a guy"]} />
            </div>
        )
    }

}

export default AboutMe;