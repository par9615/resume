import React from 'react';
import CarouselItem from '../CarouselItem/CarouselItem.js';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedIndex: 0 };

        this.goLeft = this.goLeft.bind(this);
        this.goRight = this.goRight.bind(this);
    }


    goLeft() {
        this.setState((prevState) => {
            var newIndex = ((prevState.selectedIndex - 1) + this.props.projects.length) % this.props.projects.length;
            console.log(newIndex);
            return ({
                selectedIndex: newIndex
            })
        });
    }

    goRight() {
        this.setState((prevState) => {
            var newIndex = (prevState.selectedIndex + 1) % this.props.projects.length;
            return ({
                selectedIndex: newIndex
            })
        });

    }

    render() {

        return (
            <div className="carousel-container">
                <div id="leading">
                    <button type="button" className="carousel-button" onClick={this.goLeft}><FontAwesomeIcon icon="chevron-left"></FontAwesomeIcon></button>
                </div>
                <div id="content">
                    <CarouselItem {...this.props.projects[this.state.selectedIndex]}></CarouselItem>
                </div>
                <div id="trailing">
                    <button type="button" className="carousel-button" onClick={this.goRight}><FontAwesomeIcon icon="chevron-right"></FontAwesomeIcon></button>
                </div>
            </div>
        );
    }
}


export default Carousel;