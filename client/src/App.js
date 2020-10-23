import React, { useState, useEffect } from 'react';

import './App.css';

import Layout from './layouts/Layout'
import Main from './screens/Main/Main'
// import Login from './screens/Login/Login'
import CompanyList from './screens/CompanyList/CompanyList'
import JobList from './screens/JobList/JobList'
import ActivityLog from './screens/ActivityLog/ActivityLog'
import CompanyDetail from './components/CompanyDetail/CompanyDetail'
// import CompanyCreate from './components/CompanyCreate/CompanyCreate'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { getAllCompanies, getOneCompany, postCompany, putCompany, destroyCompany } from './services/company'
// import { postCompany } from './services/company'
import { getAllActivities, getOneActivity, postActivity, putActivity, destroyActivity } from './services/activity'
import { getAllJobs, getOneJob, postJob, putJob, destroyJob } from './services/job'

import { Route, useHistory, Switch } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  const handleLogin = async (loginData) => {
   const userData = await loginUser(loginData) 
   setCurrentUser(userData)
   history.push('/')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
    alert("Logging Out")
  }



  return (
    <div className="App">
      <Layout 
        currentUser={currentUser}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      >
        <Switch>
          <Route exact path='/company'>
            {/* <CompanyCreate postCompany={postCompany} /> */}
            <CompanyList 
              getAllCompanies={getAllCompanies}
              getOneCompany={getOneCompany}
              postCompany={postCompany}
              putCompany={putCompany}
              destroyCompany={destroyCompany}
            />
          </Route>
          <Route exact path='/jobs'>
            <JobList 
              getAllJobs={getAllJobs}
              getOneJob={getOneJob}
              postJob={postJob}
              putJob={putJob}
              destroyJob={destroyJob}
            />
          </Route>
          <Route path='/activities'>
            <ActivityLog 
              getAllActivities={getAllActivities}
              getOneActivity={getOneActivity}
              postActivity={postActivity}
              putActivity={putActivity}
              destroyActivity={destroyActivity}
            />
          </Route>
          <Route exact path='/companies/:id'>
            <CompanyDetail />
          </Route>

          <Route exact path='/'>
            <Main />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
