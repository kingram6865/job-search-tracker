import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header(props) {
  const { currentUser, handleLogout } = props

  return (
    <div className="header-container">
      <h1><Link to='/'>Job-Search Progress-Tracker</Link></h1>
      {/* <span className="user-label">{currentUser}</span> */}
      <div className="user-label">username{currentUser}</div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <ul className="header-links">
        <li><Link to='/company'>Companies</Link></li>|
        <li><Link to='/jobs'>Jobs</Link></li>|
        <li><Link to='/activities'>Activity</Link></li>
      </ul>
      <hr />
    </div>
  )
}