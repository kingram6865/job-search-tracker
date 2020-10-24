import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function ActivityLog(props) {
  const [activity, setActivity] = useState(null)
  const { getAllActivities } = props
  const history = useHistory()

  useEffect(() => {
    const fetchActivities = async () => {
      const activityData = await getAllActivities()
      setActivity(activityData)
    }
    fetchActivities()
  }, [getAllActivities])

  return (
    <div className="activity-log-screen">
      <h3>Activity Log</h3>
      {
        activity &&
        <>
          <ul className="detail-list">
            {activity.map(item => (
              <li 
                key={item.id}>
                <span className="action">{item.action}</span>|
                <span>{item.status}</span>|
                <span>{item.follow_up}</span>
                <button onClick={() => history.push(`/edit/activity/${item.id}`)}>Edit</button><button onClick={() => alert(`This will delete activity record ${item.id}`)}>Delete</button>
              </li>))}
          </ul>
        </>
      }
      <button onClick={() => history.push('/add/activity')}>Add An Action</button>
    </div>
  )
}