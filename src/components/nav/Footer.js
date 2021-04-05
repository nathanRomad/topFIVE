import React from "react"
import { Link } from "react-router-dom"
import { userStorageKey } from "../auth/authSettings"
import "./NavBar.css"
import "nes.css/css/nes.min.css";

const Logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
        sessionStorage.setItem(userStorageKey, "")
    }
}

export const Footer = (props) => {
    return (
        <nav className="footer nes-container is-rounded">
            <ul className="nav nav-pills nav-fill">
                <a class="nes-icon linkedin is-large" href="https://www.linkedin.com/in/nathan-hamilton-3864b520/" target="_blank" rel="noopener noreferrer"></a>
                <a class="nes-icon instagram is-large" href="https://www.instagram.com/idreamoftravel/" target="_blank" rel="noopener noreferrer"></a>
                <a class="nes-icon github is-large" href="https://github.com/nathanRomad" target="_blank" rel="noopener noreferrer"></a>
                <Link class="nes-logo" to="/about"></Link>
                {/* <p className="copyright">© topFIVE</p> */}
            </ul>
        </nav>
    )
}