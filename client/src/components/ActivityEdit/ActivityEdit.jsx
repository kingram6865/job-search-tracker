import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ActivityEdit(props) {
  const { getOneActivity, putActivity, destroyActivity, getAllJobs, currentUser } = props
  const { id } = useParams()
  const [activity, setActivity] = useState(null)
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchActivity = async () => {
      const activityData = await getOneActivity(id)
      // console.log(activityData)
      setActivity(activityData)
    }

    const fetchJobs = async () => {
      const jobData = await getAllJobs()
      // setJobs(jobData.filter((item) => item.job_id === activity.job_id))
      console.log(jobData)
      setJobs(jobData)
    }

    if (currentUser){
      fetchActivity()
      fetchJobs()
    }

  }, [id, getAllJobs, getOneActivity, currentUser])

  // useEffect(() => {
  //   setJobs(jobs.filter((item) => item.id === activity.job_id ))
  // }, [jobs, activity])


  const handleSubmit = (e) => {
    e.preventDefault()
    putActivity(id, activity)
    // console.log(activity)
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
          <label name="jobs">
            {
              jobs && activity &&
              jobs.filter((item) => item.id === activity.job_id).map((opt, index) => (
                <React.Fragment key={index}>
                <span  value={opt.id}>{opt.job_name}</span>
                <input  readOnly text="number" value={opt.id} />
                </React.Fragment>
                ))
            }
          </label>
        </label>
        <label>Action Taken:
          <input type="text" name="action" value="" onChange={handleChange} />
        </label>
        <label>Status:
          <input type="text" name="status" value="" onChange={handleChange} />
        </label>
        <label>Follow Up:
          <input type="text" name="follow_up" value="" onChange={handleChange} />
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