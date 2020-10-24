import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ActivityEdit(props) {
  const { putActivity, destroyActivity } = props
  const { getOneActivity } = props
  const { id } = useParams()
  const [activity, setActivity] = useState(null)

  useEffect(() => {

  }, [])


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
        <label>Action:
        <input type="text" name="action" value="" onChange={handleChange} />
        </label>
        <label>Status:
        <input type="text" name="status" value="" onChange={handleChange} />
        </label>
        <label>Follow Up:
        <input type="text" name="followUp" value="" onChange={handleChange} />
        </label>
        <label><button>Update</button></label><label><button onClick>Delete</button></label>
      </form>
    </div>
  )
}