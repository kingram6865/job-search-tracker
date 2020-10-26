import React, { useState, useEffect } from 'react';

import './App.css';

import Layout from './layouts/Layout'
import Main from './screens/Main/Main'
import Login from './screens/Login/Login'
import Register from './screens/Register/Register'
import CompanyList from './screens/CompanyList/CompanyList'
import JobList from './screens/JobList/JobList'
import ActivityLog from './screens/ActivityLog/ActivityLog'

import CompanyCreate from './components/CompanyCreate/CompanyCreate'
import CompanyDetail from './components/CompanyDetail/CompanyDetail'
import CompanyEdit from './components/CompanyEdit/CompanyEdit'
import ActivityCreate from './components/ActivityCreate/ActivityCreate'
// import ActivityDetail from './components/ActivityDetail/ActivityDetail'
import ActivityEdit from './components/ActivityEdit/ActivityEdit'
import JobCreate from './components/JobCreate/JobCreate'
import JobDetail from './components/JobDetail/JobDetail'
import JobEdit from './components/JobEdit/JobEdit'


import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { getAllCompanies, getOneCompany, postCompany, putCompany, destroyCompany } from './services/company'
import { getAllActivities, getOneActivity, postActivity, putActivity, destroyActivity } from './services/activity'
import { getAllJobs, getOneJob, postJob, putJob, destroyJob } from './services/job'

import { Route, useHistory, Switch } from 'react-router-dom'

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
          <Route exact path='/login'>
            <Login handleLogin={handleLogin}/>
          </Route>
          <Route exact path='/register'>
            <Register 
              handleLogin={handleLogin}
              handleRegister={handleRegister}
              currentUser={currentUser}
              />
          </Route>
          <Route exact path='/companies'>
            <CompanyList 
              currentUser={currentUser}
              getAllCompanies={getAllCompanies}
              getOneCompany={getOneCompany}
              postCompany={postCompany}
              putCompany={putCompany}
              destroyCompany={destroyCompany}
            />
          </Route>
          <Route exact path='/jobs'>
            <JobList 
              currentUser={currentUser}
              getAllJobs={getAllJobs}
              getOneJob={getOneJob}
              postJob={postJob}
              putJob={putJob}
              destroyJob={destroyJob}
            />
          </Route>
          <Route path='/activities'>
            <ActivityLog
              currentUser={currentUser}
              getAllJobs={getAllJobs} 
              getAllActivities={getAllActivities}
              getOneActivity={getOneActivity}
              postActivity={postActivity}
              putActivity={putActivity}
              destroyActivity={destroyActivity}
            />
          </Route>

          <Route exact path='/edit/activity/:id'>
            <ActivityEdit 
              currentUser={currentUser}
              getOneActivity={getOneActivity} 
              getAllJobs={getAllJobs} 
              destroyActivity={destroyActivity}
              putActivity={putActivity} 
            />
          </Route>


          <Route exact path='/companies/:id/edit' render={
            (props) => <CompanyEdit currentUser={currentUser} putCompany={putCompany} getOneCompany={getOneCompany} />} />

          <Route path='/add/company'>
            <CompanyCreate currentUser={currentUser} postCompany={postCompany} />
          </Route>

          <Route path='/add/job'>
            <JobCreate currentUser={currentUser} postJob={postJob} getAllCompanies={getAllCompanies} />
          </Route>

          <Route path='/add/activity'>
            <ActivityCreate postActivity={postActivity} getAllJobs={getAllJobs} />
          </Route>

          <Route exact path='/jobs/:id'>
            <JobDetail 
              currentUser={currentUser}
              getOneJob={getOneJob} 
              putJob={putJob}
              />
          </Route>

          <Route exact path='/jobs/:id/edit'>
            <JobEdit 
              getAllCompanies={getAllCompanies}
              currentUser={currentUser}
              getOneJob={getOneJob}
              putJob={putJob}
            />
          </Route>


          <Route exact path='/companies/:id'>
            <CompanyDetail />
          </Route>


          <Route exact path='/'>
            <Main currentUser={currentUser}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
