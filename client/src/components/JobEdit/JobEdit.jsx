import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './JobEdit.css'

export default function JobEdit(props) {
  const { getAllCompanies, currentUser, getOneJob, putJob, destroyJob } = props
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const [companies, setCompanies] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchJob = async () => {
      const jobData = await getOneJob(id) 
      setJob(jobData)
    }

    const fetchCompanies = async () => {
      const companyData = await getAllCompanies()
      setCompanies(companyData)
    }
    
    if (currentUser) {
      fetchJob()
      fetchCompanies()
    }
  }, [id, currentUser, getOneJob, getAllCompanies])

  const handleChange = async (e) => {
    const { name, value } = e.target
    setJob({ ...job, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    putJob(id, job)
    history.push(`/jobs/${id}`)
  }

  return (
    <div>
      {      
        job &&
        <>
        <h3>Update Job data </h3>
        <form onSubmit={handleSubmit}>
          <label><select className="select-company">
          <option default value="0">Which Company?</option>
            {
              companies &&
              companies.map((item, index) => (<option key={index} value={item.id}>{item.company_name}</option>))
            }
          </select>
          </label>
          <label><input type="text" name="job_name" onChange={handleChange} value={job.job_name}/></label>
          <label><input type="text" name="keywords" onChange={handleChange} value={job.keywords}/></label>
          <label><input className="test" type="textarea" name="job_details" onChange={handleChange} value={job.job_details}/></label>
          <label><button>Update</button></label>
        </form>
        <label><button>Update</button><button onClick={() => {destroyJob(id)}}>Delete</button></label>
        </>
      }
    </div>
  )
}