import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact" id="contact">
                <div id="upper">
                    <h1>Contact</h1>
                </div>
                <div id="lower">
                    <div className>
                        <a className="link" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=par9615@gmail.com&tf=1" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fas', "envelope"]}></FontAwesomeIcon></a>
                        <h4>par9615@gmail.com</h4>
                    </div>
                    <div>
                        <a className="link" href="https://www.linkedin.com/in/par9615/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', "linkedin-in"]}></FontAwesomeIcon></a>
                        <h4>Rogelio Miguel Hernández Sandoval</h4>
                    </div>
                    <div>
                        <a className="link" href="https://www.github.com/par9615" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', "github"]}></FontAwesomeIcon></a>
                        <h4>par9615</h4>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;