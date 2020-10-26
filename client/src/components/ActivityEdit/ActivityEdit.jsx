import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './ActivityEdit.css'

export default function ActivityEdit(props) {
  const { getOneActivity, putActivity, destroyActivity, currentUser } = props
  const { id } = useParams()
  const [activity, setActivity] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const fetchActivity = async () => {
      const activityData = await getOneActivity(id)
      setActivity(activityData)
    }

    if (currentUser){
      fetchActivity()
    }
  }, [id, getOneActivity, currentUser])

  const handleSubmit = (e) => {
    e.preventDefault()
    putActivity(id, activity)
    history.push('/activities')
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setActivity({...activity, [name]: value})
  }

  return (
    <div className="activity-log-edit-form">
    {
      activity &&
      <>
      <h3>Action taken on {activity.job['job_name']} Position</h3>
      <form onSubmit={handleSubmit}>
        <label>Action Taken:
          <input type="text" name="action" value={activity.action} onChange={handleChange} />
        </label>
        <label>Status:
          <input type="text" name="status" value={activity.status} onChange={handleChange} />
        </label>
        <label>Follow Up:
          <input type="text" name="follow_up" value={activity.follow_up} onChange={handleChange} />
        </label>
        <label>
          <button>Update</button>
        </label>
      </form>
        <label>
          <button onClick={() => destroyActivity(id)}>Delete</button>
        </label>
        </>
      }
    </div>
  )
}