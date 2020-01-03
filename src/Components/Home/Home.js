import React from 'react';
import './Home.css';


class DescriptionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentIndex: 0 };
    }

    componentDidMount() {
        setInterval(() => this.incrementIndex(), 5000);
    }

    removeAnimation() {
        var subtitle = document.getElementById("subtitle");
        subtitle.addEventListener("webkitAnimationEnd", () => { subtitle.classList.remove('disappear') }, false);
    }

    incrementIndex() {
        var subtitle = document.getElementById("subtitle");
        this.removeAnimation();
        subtitle.classList.add('disappear');
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex + 1) % this.props.titles.length
        }));
    }

    render() {
        return (
            <div className="home-container" id="home">
                <div className="center-box">
                    <h4>HELLO</h4>
                    <h1 id="title">I'm Miguel Hernández</h1>
                    <h2 id="subtitle">{this.props.titles[this.state.currentIndex]}</h2>
                    <div>
                        <a href="https://docs.google.com/document/d/1CBx5rL4qFLBeZkxWlghA-OVhg8DI_DJtF_yLUNe7Y5g/export?format=pdf" download="resume.pdf"><button type="button" className="button" id="download-cv">Download CV</button></a>
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
                <DescriptionContainer titles={["Mobile Developer", "Web Developer", "Just a guy"]} />
            </div>
        )
    }

}

export default Home;