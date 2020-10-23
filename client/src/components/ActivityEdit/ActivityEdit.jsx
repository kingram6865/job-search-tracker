import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ActivityEdit(props) {
  const { putActivity, destroyActivity } = props
  const { id } = useParams()
  const [activity, setActivity]

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
        <input type="text" name="action" value="" onChange={handleChange} />
        <input type="text" name="status" value="" onChange={handleChange} />
        <input type="text" name="followUp" value="" onChange={handleChange} />
        <button>Update</button><button onClick>Delete</button>
      </form>
    </div>
  )
}