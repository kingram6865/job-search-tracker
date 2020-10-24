import React, { useEffect, useState} from 'react'
import { Link, useParams} from 'react-router-dom'
import { verifyUser } from '../../services/auth'

export default function ActivityDetail(props) {
  const [activity, setActivity] = useState(null)
  const { id } = useParams()
  const { getOneActivity } = props

  useEffect(() => {
    verifyUser()
    const fetchActivity = async () => {
      const activityData = await getOneActivity(id)
      setActivity(activityData)
    }
    fetchActivity()
  }, [id, getOneActivity])

  return (
    <div className="activity-entry">
      {
        activity &&
        <>
            <p>{activity.action}</p>
            <p>{activity.status}</p>
            <p>{activity.follow_up}</p>
        </>
      }
      <Link to='/activities'>Back</Link>
    </div>
  )
}