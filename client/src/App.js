import React, { useState, useEffect } from 'react';
import './App.css';

import Layout from './layouts/Layout'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

// import { Route, useHistory, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    handleVerify()
  }, [])

  const handleLogin = async (loginData) => {
   const userData = await loginUser(loginData) 
   setCurrentUser(userData)
   history.push('/')
  }

  const handleVerify = async () => {
    const userData = await verifyUser()
    setCurrentUser(userData)
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleLogout = () => {
    // setCurrentUser(null)
    // localStorage.removeItem('authToken')
    // removeToken()
    alert("Logging Out")
  }

  return (
    <div className="App">
      <Layout 
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
      App Data
      </Layout>
    </div>
  );
}

export default App;
