import { Link } from 'react-router-dom';
import techBlogsImg from '../../assets/images/tech-blogs.png';
import React, { useState } from 'react'
import './NavBar.css';
function Navbar() {

    const [isShow, setIsShow] = useState(true);

    const toggleNavBar = () => {
        setIsShow((preViewState) => !preViewState)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <a className="navbar-brand" href="/"><img src={techBlogsImg} alt="tech-blogs" /></a>
            <button className="navbar-toggler" onClick={toggleNavBar} type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`navbar-nav ml-auto ${isShow ? "show-navbar" : "hide-navbar"}`} id="navbarNavAltMarkup">
                <ul className="navbar-nav ms-auto">
                    <li className="navbar-nav ml-auto">
                        <Link to="/" className="fas fa-home" aria-current="page">Home</Link>
                    </li>
                    <li className="navbar-nav ml-auto">
                        <Link to="/about" className="fas fa-info-circle">About</Link>
                    </li>
                    <li className="navbar-nav ml-auto">
                        <Link to="/contact" className="fas fa-phone-square-alt"> Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar