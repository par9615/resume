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
                    <h1>Contact</h1>
                </div>
                <div id="lower">
                    <div className>
                        <a className="link" href=""><FontAwesomeIcon icon={['fas', "envelope"]}></FontAwesomeIcon></a>
                        <h4>par9615@gmail.com</h4>
                    </div>
                    <div>
                        <a className="link" href="www.linkedin.com"><FontAwesomeIcon icon={['fab', "linkedin-in"]}></FontAwesomeIcon></a>
                        <h4>Rogelio Miguel Hernández Sandoval</h4>
                    </div>
                    <div>
                        <a className="link" href="www.github.com"><FontAwesomeIcon icon={['fab', "github"]}></FontAwesomeIcon></a>
                        <h4>par9615</h4>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;