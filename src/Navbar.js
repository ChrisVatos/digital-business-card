import React from "react"
import "./Navbar.css"

function Navbar() {
    return(
        <nav className="navbar">
            <img className="profile-picture" src="./profilepic.png" alt="Profile"/>
            <h3 className="full-name">Chrisovalantis Vatos</h3>
            <h6 className="current-role">Software Engineering Student</h6>
        </nav>
    );
}

export default Navbar;