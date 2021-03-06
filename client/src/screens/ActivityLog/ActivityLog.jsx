import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './ActivityLog.css'

export default function ActivityLog(props) {
  const [activity, setActivity] = useState(null)
  const [change, setChange] = useState(false)
  const { getAllActivities, currentUser, destroyActivity } = props
  const history = useHistory()
  
  useEffect(() => {
    const fetchActivities = async () => {
      const activityData = await getAllActivities()
      setActivity(activityData)
    }
    if (currentUser){
      fetchActivities()    
    }
  }, [change, getAllActivities, currentUser])

  useEffect(() => {
    const fetchActivities = async () => {
      const activityData = await getAllActivities()
      setActivity(activityData)
    }

    if (currentUser) {
      fetchActivities()
    }
  }, [currentUser, getAllActivities])

  return (
    <div className="activity-log-screen">
      <h3>Activity Log</h3>
      <table className="detail-list">
      <tbody>
        <tr><th>Action ID</th><th>Action Taken</th><th>Action Status</th><th>Action Follow-Up</th><th></th><th></th></tr>
      {
        activity &&
        <>
          {activity.map(item => (
            <tr 
              key={item.id}>
              <td><span className="action">{item.id}</span></td>
              <td><span className="action">{item.action}</span></td>
              <td><span className="status">{item.status}</span></td>
              <td><span className="follow-up">{item.follow_up}</span></td>
              <td><i className="far fa-edit" onClick={() => history.push(`/edit/activity/${item.id}`)}></i></td>
              <td><i className="fas fa-window-close" onClick={() => {
                destroyActivity(item.id)
                setChange(true)
                }}></i></td>
            </tr>))}
        </>
      }
        <tr><td></td><td><button onClick={() => history.push('/add/activity')}>Add An Action</button></td></tr>
      </tbody>
      </table>
    </div>
  )
}