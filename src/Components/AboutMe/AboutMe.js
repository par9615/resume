import React from 'react';
import './AboutMe.css';
import bigImage from '../../../assets/images/big-image.jpg';

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={bigImage} height="120px"></img>
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
                <ImageContainer></ImageContainer>
            </div>
        )
    }

}

export default AboutMe;