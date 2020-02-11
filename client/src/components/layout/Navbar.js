import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../../imgs/logo.png";

//ladning page navbar

const Navbar = ({user, isAuthenticated, logoutUser}) => {
    return (
        <nav className="navbar">
            <a className="logo" href="/"><img src={logo}/></a>
            <NavLink className="navbar-link text-light" to="/">Home</NavLink>
        </nav>
    )
}



export default Navbar