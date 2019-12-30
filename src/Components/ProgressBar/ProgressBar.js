import React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="progress">
                <div className="progress-bar" style={{ width: `${this.props.progress}%` }}>
                    {this.props.progress}%
                </div>
            </div>
        );
    }
}

export default ProgressBar;