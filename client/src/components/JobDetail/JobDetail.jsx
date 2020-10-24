import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { verifyUser } from '../../services/auth'

export default function JobItem(props) {
  const { getOneJob } = props
  const { id } = useParams()
  const [job, setJob] = useState(null)

  useEffect(() => {
    verifyUser()
    const fetchJob = async () => {
      const jobData = await getOneJob(id)
      setJob(jobData)
    }
    fetchJob()
  }, [id, getOneJob])

  return (
    <div className="job-item">
      {
        job &&
        <>
          <h3>{job.job_name}</h3>
          <p>{job.keywords}</p>
          <p>{job.job_details}</p>
        </>
      }
      <Link to='/jobs'>Back</Link>
      <button>Edit</button><button>Delete</button>
    </div>
  )
}