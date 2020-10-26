import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link, useHistory } from 'react-router-dom'
import { capitalize } from '../../services/helpers'

export default function Header(props) {
  const history = useHistory()
  const { currentUser, handleLogout } = props
  const [displayData, setDisplayData] = useState('')

  useEffect(() => {
    if (currentUser){
      setDisplayData(
        <>
        <div className="user-label">{currentUser && <> {capitalize(currentUser.username)} <div>{currentUser.email}</div> </>}</div>
        {
          currentUser &&
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        }
        <ul className="header-links">
          <label><li className="nav-item"><Link to='/companies'>Companies</Link></li></label>
          <label><li className="nav-item"><Link to='/jobs'>Jobs</Link></li></label>
          <label><li className="nav-item"><Link to='/activities'>Activity Report</Link></li></label>
        </ul>
        </>
      )
    } else {
      setDisplayData(
      <>
        <button onClick={() => history.push('/login')}>Login</button>
        <button onClick={() => history.push('/register')}>Register</button>
      </>)
    }
  }, [currentUser, handleLogout, history])

  return (
    <div className="header-container">
      <h1><Link to='/'>Job-Search Progress-Tracker</Link></h1>
        {displayData}
      <hr />
    </div>
  )
}