import React, { useState, useEffect } from 'react';

import './App.css';

import Layout from './layouts/Layout'
import Main from './screens/Main/Main'
import Login from './screens/Login/Login'
import Register from './screens/Register/Register'
import CompanyList from './screens/CompanyList/CompanyList'
import JobList from './screens/JobList/JobList'
import ActivityLog from './screens/ActivityLog/ActivityLog'

import CompanyDetail from './components/CompanyDetail/CompanyDetail'
// import ActivityDetail from './components/ActivityDetail/ActivityDetail'
import ActivityEdit from './components/ActivityEdit/ActivityEdit'
import JobDetail from './components/JobDetail/JobDetail'
import CompanyCreate from './components/CompanyCreate/CompanyCreate'
import ActivityCreate from './components/ActivityCreate/ActivityCreate'
import JobCreate from './components/JobCreate/JobCreate'
import CompanyEdit from './components/CompanyEdit/CompanyEdit'

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
          <Route exact path='/companies/:id'>
            <CompanyDetail />
          </Route>
          <Route exact path='/jobs/:id'>
            <JobDetail getOneJob={getOneJob} />
          </Route>
          {/* <Route exact path={`/activity_log/:${currentUser.id}`}>
            <ActivityDetail />
          </Route> */}
          <Route exact path='/edit/activity/:id'>
            <ActivityEdit 
              currentUser={currentUser}
              getOneActivity={getOneActivity} 
              getAllJobs={getAllJobs} 
              destroyActivity={destroyActivity}
              putActivity={putActivity} 
            />
          </Route>
           <Route exact path='/'>
            <Main currentUser={currentUser}/>
          </Route>
          <Route exact path='/companies/:id/edit' render={(props) => <CompanyEdit putCompany={putCompany} getOneCompany={getOneCompany} />} />

          <Route path='/add/company'>
            <CompanyCreate postCompany={postCompany} />
          </Route>

          <Route path='/add/job'>
            <JobCreate postJob={postJob} />
          </Route>

          <Route path='/add/activity'>
            <ActivityCreate postActivity={postActivity} getAllJobs={getAllJobs} />
          </Route>

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
