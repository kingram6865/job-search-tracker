import React from 'react'
import { useHistory } from 'react-router-dom'
import { capitalize } from '../../services/helpers'

export default function Main(props) {
  const { currentUser } = props
  const history = useHistory()

  const displayWelcome = currentUser ? (<h2>Welcome, {capitalize(currentUser.username)}!</h2>) : (
    <>
      <button onClick={() => history.push('/login')}>Login</button>
      <button onClick={() => history.push('/register')}>Register</button>
    </>
  )

  return (
    <div>
      {displayWelcome}
    </div>
  )
}