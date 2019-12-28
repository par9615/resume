import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/global.css';

library.add(faChevronLeft, faChevronRight);

const App = () => {
    return (
        <div>
            <div className="screen-container">
                <Navbar></Navbar>
                <Home ></Home>
            </div>
            <div className="screen-container">
                <Portfolio></Portfolio>
            </div>

        </div>
    );
}

ReactDOM.render(<App></App>, document.getElementById("root"));

