import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './ActivityLog.css'

export default function ActivityLog(props) {
  const [activity, setActivity] = useState(null)
  const { getAllActivities } = props
  const history = useHistory()

/**
 *   Line 18:6:  React Hook useEffect has a missing dependency: 'fetchActivities'. 
 *   Either include it or remove the dependency array  react-hooks/exhaustive-deps
 * 
    const fetchActivities = async () => {
      const activityData = await getAllActivities()
      setActivity(activityData)
    }
 */

  
  /**
   *   Line 16:9:  The 'fetchActivities' function makes the dependencies of 
   *   useEffect Hook (at line 23) change on every render. Move it inside the 
   *   useEffect callback. Alternatively, wrap the 'fetchActivities' definition 
   *   into its own useCallback() Hook  react-hooks/exhaustive-deps
   * 
        useEffect(() => {
          fetchActivities()
        }, [getAllActivities, fetchActivities])
   */
  

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
      <table className="detail-list">
      <tbody>
        <tr><th>Action Taken</th><th>Action Status</th><th>Action Follow-Up</th></tr>
      {
        activity &&
        <>
          {activity.map(item => (
            <tr 
              key={item.id}>
              <td><span> {}</span></td>
              <td><span className="action">{item.action}</span></td>
              <td><span className="status">{item.status}</span></td>
              <td><span className="follow-up">{item.follow_up}</span></td>
              <td><button className="edit" onClick={() => history.push(`/edit/activity/${item.id}`)}>Edit</button></td>
              <td><button className="delete" onClick={() => alert(`This will delete activity record ${item.id}`)}>Delete</button></td>
            </tr>))}
        </>
      }
        <tr><td><button onClick={() => history.push('/add/activity')}>Add An Action</button></td></tr>
      </tbody>
      </table>
    </div>
  )
}