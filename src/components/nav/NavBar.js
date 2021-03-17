import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <nav className="navbar">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/topFIVE">my topFIVE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/discover">Discover</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/friends">Friends</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/messages">Messages</Link>
        </li>
      </ul>
    </nav>
  )
}