import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { capitalize } from '../../services/helpers'

export default function Header(props) {
  const { currentUser, handleLogout } = props

  return (
    <div className="header-container">
      <h1><Link to='/'>Job-Search Progress-Tracker</Link></h1>
      <div className="user-label">{currentUser && capitalize(currentUser.username)}</div>
      {
        currentUser &&
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      }
      <ul className="header-links">
        <li><Link to='/companies'>Companies</Link></li>|
        <li><Link to='/jobs'>Jobs</Link></li>|
        <li><Link to='/activities'>Activity</Link></li>
      </ul>
      <hr />
    </div>
  )
}