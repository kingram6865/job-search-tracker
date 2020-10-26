import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

export default function CompanyCreate(props) {
  const [formData, setFormData] = useState({
    company_name: "",
    industry: "",
    general_rating: "0",
    external_recruiter: "f",
  })

  const history = useHistory()
  const { postCompany, currentUser } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentUser){
      postCompany(formData)
    } else {
      alert("You need to create a login to add data.")
    }
    history.push('/add/company')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div>
        <h3>Add A Company</h3>
        <form onSubmit={handleSubmit}>
          <label> Company Name:
            <input type="text" name="company_name" onChange={handleChange} value={formData.company_name} />
          </label>

          <label>Industry:
            <input type="text" name="industry" onChange={handleChange} value={formData.industry} />
          </label>

          <label>Company Culture Rating:
            <input type="number" min="0" max="5" name="general_rating" onChange={handleChange} value={formData.general_rating} />
          </label>

          <label> External Recruiter?
            <input type="checkbox" name="external_recruiter" onChange={handleChange} value={formData.external_recruiter} />
          </label>
          <label><button>Save</button><button onClick={() => history.push('/add/company')}>Add Another Company</button></label>
          
        </form>
        <Link to='/companies'>Back</Link>
    </div>
  )
}