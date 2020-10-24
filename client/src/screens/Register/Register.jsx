import React, { useState } from 'react'
import './Register.css'

export default function Register(props) {
  const { handleRegister } = props
  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  return (
    <div className="registration-screen">
      <h3>Create an Account</h3>
      <form onSubmit={handleRegister}>
        <label>Username:
          <input name="username" type="text" value={formData.username} onChange={handleChange} />
        </label>

        <label>Email:
          <input name="email" type="text" value={formData.email} onChange={handleChange} />
        </label>

        <label>Password:
          <input name="password" type="password" value={formData.password} onChange={handleChange} />
        </label>

        <button>Create Account</button>
      </form>
      
    </div>
  )
}