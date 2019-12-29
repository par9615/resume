import React from 'react';
import '../FlipCard/FlipCard.css';

class FlipCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="http://lorempixel.com/256/256"></img>
                    </div>
                    <div className="flip-card-back">
                        <h4>Chale</h4>
                        <p>juas jaus jaus</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default FlipCard;