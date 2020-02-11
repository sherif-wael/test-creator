import React from "react";
import logo from "../../imgs/logo.png"

//ladning page footer

const Footer = () => {
    return <div className="footer text-center">
             <p><img src={logo} className="footer-logo" /> all copyrights reserved 2020 <i className="fab fa-facebook"></i></p>
           </div>
}

export default Footer