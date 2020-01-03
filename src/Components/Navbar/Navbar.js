import React from 'react';
import './Navbar.css';

window.onscroll = () => {

    if (document.documentElement.scrollTop >= 64) {
        var navbar = document.getElementById("navbar");
        navbar.classList.add("navbar-black");
    }

    if (document.documentElement.scrollTop == 0) {
        var navbar = document.getElementById("navbar");
        navbar.classList.remove("navbar-black");
    }

}


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.scroll = this.scroll.bind(this);
    }

    scroll(sectionName) {
        var sectionDiv = document.getElementById(sectionName);
        console.log(sectionDiv.offsetTop);
        window.scrollTo(0, sectionDiv.offsetTop - 72);
    }

    render() {
        return (
            <div className="navbar" id="navbar">
                <div onClick={_ => this.scroll("home")}>Home</div>
                <div onClick={_ => this.scroll("about-me")}>About me</div>
                <div onClick={_ => this.scroll("contact")}>Contact</div>
            </div >
        );
    }
}

export default Navbar;