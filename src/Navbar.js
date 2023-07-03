import React from "react";
import logo2 from "./imgs/logo-2.png";
import {Link} from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return(
    <div>
        <div className="nav">
            <img id="logo-img-1" src={logo2} alt="logo-img-1"/>
            <span className="title-cont">Auction Off</span>
            <div className="nav-cont">
                <div>
                    <Link to="/" className="navbar-link">
                        Home
                    </Link>
                    <div className="underline"/>
                </div>

                <div>
                    <Link to="/sign-in-register" className="navbar-link">
                        Sign in
                    </Link>
                    <div className="underline"/>
                </div>

                <div>
                    <Link to="/auction-list" className="navbar-link">
                        Auction List
                    </Link>
                    <div className="underline"/>
                </div>

                <div>
                    <Link to="/sign-in-register" className="navbar-link">
                        Sign Up
                    </Link>
                    <div className="underline"/>
                </div>
            </div>
        </div>
    </div>


    );
}

export default Navbar