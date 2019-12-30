import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/global.css';

library.add(fab, fas);


const App = () => {
    return (
        <div>
            <div className="screen-container">
                <Navbar></Navbar>
                <Home ></Home>
            </div>
            <div className="screen-container">
                <AboutMe></AboutMe>
            </div>
            <div className="screen-container">
                <Portfolio></Portfolio>
            </div>
            <div className="">
                <Contact></Contact>
            </div>

        </div>
    );
}

ReactDOM.render(<App></App>, document.getElementById("root"));

