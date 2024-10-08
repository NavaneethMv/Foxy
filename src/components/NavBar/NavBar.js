import React from "react";
import './NavBar.css'


function NavBar() {
    return (
        <div className='navbar'>
            <div className="navbar-container">
                <a href="#" className="navbar-heading">Foxy Holidays</a>
                <ul className="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Packages</a></li>
                    <li><a href="#">Apply Visa</a></li>
                </ul>
                <a href="#" className="navbar-cta">Contact Us</a>
            </div>
        </div>
    );
}

export default NavBar;