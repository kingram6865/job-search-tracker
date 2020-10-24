import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function JobList(props) {
  const { getAllJobs } = props
  const [jobs, setJobs] = useState()

  useEffect(() => {
    const fetchJobs = async () => {
      const jobData = await getAllJobs()
      setJobs(jobData)
    }
    fetchJobs()
  }, [getAllJobs])

  return (
    <div className="job-list-screen">
      <h3>Jobs List</h3>
      {
        jobs &&
        <>
          <ul className="detail-list">
            {jobs.map(item => (<li key={item.id}><Link to={`/jobs/${item.id}`}>{item.job_name}</Link></li>))}
          </ul>
          <button onClick={() => alert('Add a Job')}>Add A Job</button>
        </>
      }
    </div>
  )
}