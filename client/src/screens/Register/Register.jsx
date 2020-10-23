import React from 'react'

export default function Register(props) {

  return (
    <div className="registration-screen">
      <form onSubmit={``}>
        <input name="username" type="text" value={``} onChange={``} />
        <input name="email" type="text" value={``} onChange={``} />
        <input name="password" type="password" value={``} onChange={``} />
        <button>Create</button>
      </form>
    </div>
  )
}