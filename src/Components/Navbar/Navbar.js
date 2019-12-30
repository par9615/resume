import React from 'react';
import './Navbar.css';

window.onscroll = () => {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop >= 64) {
        var navbar = document.getElementById("navbar");
        navbar.classList.add("navbar-black");
    }

    if (document.documentElement.scrollTop == 0) {
        var navbar = document.getElementById("navbar");
        navbar.classList.remove("navbar-black");
    }
}

const Navbar = () => {
    return (
        <div className="navbar" id="navbar">
            <div>Home</div>
            <div>About me</div>
            <div>Portfolio</div>
            <div>Contact</div>
        </div>
    );
};

export default Navbar;