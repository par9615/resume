import React from 'react';
import '../FlipCard/FlipCard.css';

class FlipCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var frontChild;
        if (this.props.image == undefined)
            frontChild = (<h4>Coming soon!</h4>);
        else
            frontChild = (<img id="card-image" src={this.props.image}></img>);

        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        {frontChild}
                    </div>
                    <div className="flip-card-back">
                        <h4>{this.props.title}</h4>
                        <h6>{this.props.subtitle}</h6>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default FlipCard;