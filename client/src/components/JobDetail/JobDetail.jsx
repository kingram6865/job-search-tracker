import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { verifyUser } from '../../services/auth'

export default function JobItem(props) {
  const { getOneJob, currentUser } = props
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const history = useHistory()

  useEffect(() => {
    verifyUser()
    const fetchJob = async () => {
      const jobData = await getOneJob(id)
      setJob(jobData)
    }
    if (currentUser) {
      fetchJob()
    }
  }, [id, getOneJob, currentUser])

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
      <i className="fas fa-arrow-circle-left" onClick={() => history.push('/jobs')}></i>
      <i className="fas fa-edit" onClick={() => history.push(`/jobs/${id}/edit`)}></i>
      <i className="fas fa-window-close" onClick={() => alert("Delete this item")}></i>
    </div>
  )
}