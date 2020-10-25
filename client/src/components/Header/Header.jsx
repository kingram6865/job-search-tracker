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
          <li><Link to='/companies'>Companies</Link></li>|
          <li><Link to='/jobs'>Jobs</Link></li>|
          <li><Link to='/activities'>Activity Report</Link></li>
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

  /**
   * Create a displayData variable that will use a ternary to decide
   * what to display.
   * 
   * When an unauthenticate user navigates to the url, they should see only 
   * the login/register buttons. Otherwise it should display the Companies | Jobs | Activity Log links.
   * 
   */
  // const displayData = currentUser 
  // ?
  // (
  //   <>
  //     <h1><Link to='/'>Job-Search Progress-Tracker</Link></h1>
  //     <div className="user-label">{currentUser && <> {capitalize(currentUser.username)} <div>{currentUser.email}</div> </>}</div>
  //     {
  //       currentUser &&
  //       <button className="logout-button" onClick={handleLogout}>Logout</button>
  //     }
  //     <ul className="header-links">
  //       <li><Link to='/companies'>Companies</Link></li>|
  //       <li><Link to='/jobs'>Jobs</Link></li>|
  //       <li><Link to='/activities'>Activity</Link></li>
  //     </ul>
  //     <hr />
  //   </> 
  // )
  // :
  // (
  //   <>
  //   <h1><Link to='/'>Job-Search Progress-Tracker</Link></h1>
  //   <button onClick={() => history.push('/login')}>Login</button>
  //   <button onClick={() => history.push('/register')}>Register</button>
  //   </>
  // )


  return (
    <div className="header-container">
      <h1><Link to='/'>Job-Search Progress-Tracker</Link></h1>
      {displayData}
      {/* <div className="user-label">{currentUser && <> {capitalize(currentUser.username)} <div>{currentUser.email}</div> </>}</div>
      {
        currentUser &&
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      }
      <ul className="header-links">
        <li><Link to='/companies'>Companies</Link></li>|
        <li><Link to='/jobs'>Jobs</Link></li>|
        <li><Link to='/activities'>Activity Report</Link></li>
      </ul> */}
      <hr />
    </div>
  )
}