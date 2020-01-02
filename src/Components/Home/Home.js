import React from 'react';
import './Home.css';
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
            <div className="home-container">
                <div className="center-box">
                    <h4>HELLO</h4>
                    <h1 id="title">I'm Miguel Hernández</h1>
                    <h2 id="subtitle">{this.props.titles[this.state.currentIndex]}</h2>
                    <div>
                        <a href="https://docs.google.com/document/d/1CBx5rL4qFLBeZkxWlghA-OVhg8DI_DJtF_yLUNe7Y5g/export?format=pdf" download="resume.pdf"><button className="button" id="download-cv">Download CV</button></a>
                    </div>
                </div>
            </div>
        );
    }
}


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <DescriptionContainer titles={["Mobile Developer", "Web Developer", "Dreamer", "Just a guy"]} />
            </div>
        )
    }

}

export default Home;