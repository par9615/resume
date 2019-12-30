import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact">
                <div id="upper">
                    <h2>Contact</h2>
                </div>
                <div id="lower">
                    <div className>
                        <FontAwesomeIcon icon={['fas', "envelope"]}></FontAwesomeIcon>
                        <h4>par9615@gmail.com</h4>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fab', "linkedin-in"]}></FontAwesomeIcon>
                        <h4>Rogelio Miguel Hernández Sandoval</h4>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fab', "github"]}></FontAwesomeIcon>
                        <h4>par9615</h4>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;