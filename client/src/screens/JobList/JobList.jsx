import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function JobList(props) {
  const { getAllJobs, currentUser } = props
  const [jobs, setJobs] = useState()
  const history = useHistory()

  useEffect(() => {
    const fetchJobs = async () => {
      const jobData = await getAllJobs()
      setJobs(jobData)
    }
    if (currentUser){
      fetchJobs()
    }
  }, [currentUser, getAllJobs])

  return (
    <div className="job-list-screen">
      <h3>Jobs List</h3>
      {
        jobs &&
        <>
          <ul className="detail-list">
            {jobs.map((item, index) => (<li key={index}><Link to={`/jobs/${item.id}`}>{item.job_name}</Link></li>))}
          </ul>
          <button onClick={() => history.push('/add/job')}>Add A Job</button>
        </>
      }
    </div>
  )
}