import React from 'react'
import './Header.css'
// import { Link } from 'react-router-dom'

export default function Header(props) {
  const { currentUser, handleLogout } = props

  return (
    <div className="header-container">
      <h1>Job-Search Progress-Tracker</h1>
      {/* <span className="user-label">{currentUser}</span> */}
      <div className="user-label">username</div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <ul className="header-links">
        <li>Companies </li>|
        <li>Jobs </li>|
        <li>Activity</li>
      </ul>
      <hr />
    </div>
  )
}