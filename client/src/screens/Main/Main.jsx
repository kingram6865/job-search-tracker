import React from 'react'
import { capitalize } from '../../services/helpers'

export default function Main(props) {
  const { currentUser } = props
  const displayWelcome = currentUser ? (<h2>Welcome, {capitalize(currentUser.username)}!</h2>) : (<h2>Greetings!</h2>)

  return (
    <div>
      {displayWelcome}
    </div>
  )
}