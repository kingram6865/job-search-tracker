import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ActivityEdit(props) {
  const { getOneActivity, putActivity, destroyActivity, getAllJobs } = props
  const { id } = useParams()
  const [activity, setActivity] = useState(null)
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchActivity = async () => {
      const activityData = await getOneActivity(id)
      setActivity(activityData)
    }

    const fetchJobs = async () => {
      const jobData = await getAllJobs()
      setJobs(jobData.filter((item) => item.job_id === id))
    }

    fetchActivity()
    fetchJobs()

  }, [id, getAllJobs,getOneActivity])


  const handleSubmit = (e) => {
    e.preventDefault()
    putActivity(id, activity)
    console.log(activity)
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setActivity({...activity, [name]: value})
    console.log(activity)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Job:
          <select name="jobs">
            {
              jobs && 
              jobs.map((item) => (<option key={item.id} value={item.id}>{item.job_name}</option>))

            }
          </select>
        </label>
        <label>Action Taken:
          <input type="text" name="action" value="" onChange={handleChange} />
        </label>
        <label>Status:
          <input type="text" name="status" value="" onChange={handleChange} />
        </label>
        <label>Follow Up:
          <input type="text" name="followUp" value="" onChange={handleChange} />
        </label>
        <label>
          <button>Update</button>
        </label>
      </form>
        <label>
          <button onClick={() => destroyActivity(id)}>Delete</button>
        </label>
    </div>
  )
}