import React from 'react';
import '../Carousel/Carousel.css';

class CarouselItem extends React.Component {
    constructor(props) {
        super(props);
    }

    buildToolsList() {
        return this.props.tools.map((tool) => (
            <div className="tool">
                <img height="50px" src={tool.image}></img>

                <h4>{tool.name}</h4>
            </div>
        )
        );
    }

    render() {
        return (
            <div className="carousel-card">
                < div id="upper">
                    <div id="leading">
                        <img height="300px" src={this.props.image}></img>
                    </div>
                    <div id="trailing">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.description}</p>
                    </div>
                </div >
                <div id="lower">
                    {this.buildToolsList()}
                </div>
            </div >
        )
    }
}

export default CarouselItem;