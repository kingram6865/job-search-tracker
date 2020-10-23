import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ActivityLog(props) {
  const [activity, setActivity] = useState(null)
  const { getAllActivities } = props

  useEffect(() => {
    const fetchActivities = async () => {
      const activityData = await getAllActivities()
      setActivity(activityData)
    }
    fetchActivities()
  }, [])

  return (
    <div className="activity-log-screen">
      <h3>Activity Log</h3>
      {
        activity &&
        <>
          <ul className="detail-list">
            {activity.map(item => (<li key={item.id}><Link to={`/activities/${item.id}`}>{item.action}</Link></li>))}
          </ul>
        </>
      }
    </div>
  )
}