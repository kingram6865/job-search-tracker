import React, { useState } from 'react'

export default function Login(props) {
  const { handleLogin } = props
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = async (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  return (
    <div className="login-screen">
      <form onSubmit={(e) => {
        e.preventDefault()
        handleLogin(formData)
        }}>
        <label>Username: 
        <input type="text" name="username" value={formData.username} onChange={handleChange}/>
        </label>
        <label>Password: 
        <input type="password" name="password" value={formData.password} onChange={handleChange}/>
        </label>
        <label>
        <button>Login</button>
        </label>
      </form>
    </div>
  )
}