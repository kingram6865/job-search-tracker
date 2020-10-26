import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './JobCreate.css'

export default function JobCreate(props) {
  const { postJob, getAllCompanies } = props
  const [companies, setCompanies] = useState([])
  const [formData, setFormData] = useState({
    job_name: '',
    keywords: '',
    job_details: ''
  })
  const history = useHistory()

  useEffect(() => {
    const fetchCompanies = async () => {
      const companyData = await getAllCompanies()
      setCompanies(companyData)
    }
    fetchCompanies()
  }, [getAllCompanies])

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
        <label><select className="add-job-to-company">
          <option value="0">Which Company?</option>
          {
            companies &&
            companies.map((item, index) => (<option key={index} value={item.id}>{item.company_name}</option>))
          }
        </select></label>
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