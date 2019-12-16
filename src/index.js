import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Components/AboutMe/AboutMe';
import Portfolio from './Components/Portfolio/Portfolio';
import '../assets/css/global.css';

const App = () => {
    return (
        <div>
            <div className="screen-container">
                <Navbar></Navbar>
                <AboutMe></AboutMe>
            </div>
            <div className="screen-container">
                <Portfolio></Portfolio>
            </div>
            
        </div>
    );
}

ReactDOM.render(<App></App>, document.getElementById("root"));

