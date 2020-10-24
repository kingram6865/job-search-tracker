import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './JobCreate.css'

export default function JobCreate(props) {
  const { postJob } = props
  const [formData, setFormData] = useState({
    job_name: '',
    keywords: '',
    job_details: ''   
  })
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    postJob(formData)
    setFormData(null)
    history.push('/add/job')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Position:
        <input name="job_name" type="text" onChange={handleChange}></input></label>
        <label>Keywords:
        <input name="keywords" type="text" onChange={handleChange}></input></label>
        <label>Position Details:
        <input name="job_details" type="textarea" size="auto" onChange={handleChange}></input></label>
        <label><button>Create Job</button></label>
      </form>
      <Link to='/jobs'>Return to Job List</Link>
    </div>
  )
}