import React, { useState, useEffect } from 'react'

export default function ActivityCreate(props) {
  const [formData, setFormData] = useState({
    action: '',
    status: '',
    follow_up: '',
    job_id: 1,
    user_id: 1
  })

  const [jobs, setJobs] = useState()
  const { postActivity, getAllJobs } = props

  function handleChange(e) {
   const { name, value } = e.target
   setFormData({...formData, [name]: value})
  }

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsData = await getAllJobs()
      setJobs(jobsData)
    }
    fetchJobs()
    return () => {
      setJobs(null)
    }
  }, [getAllJobs])

  function handleSubmit(e) {
    e.preventDefault()
    !e.target['job_id'] ? alert("Assign this action to a job") : postActivity(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Action:
          <input name="action" type="text" onChange={handleChange} value={formData.action}/>
        </label>

        <label>Status:
          <input name="status" type="text" onChange={handleChange} value={formData.status}/>
        </label>

        <label>Follow Up:
          <input name="follow_up" type="textarea" onChange={handleChange} value={formData.follow_up}/>
        </label>

        <label>Related Job
          <select name="job_id" type="text" onChange={handleChange} value={formData.job_id}>
            <option default value="0">Connect activity to a Job</option>
            {
              jobs &&
              jobs.map((item) => (<option key={item.id} value={item.id}>{item.job_name}</option>))
            }
          </select>
        </label>
        <label><button>Create</button></label>
      </form>
    </div>
  )
}