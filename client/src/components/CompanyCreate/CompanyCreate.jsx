import React, { useState } from 'react'

export default function CompanyCreate(props) {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    generalRating: "0",
    externalRecruiter: "f"
  })

  const { postCompany } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    postCompany(formData)
    // console.log(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // console.log(`Value of ${name} Changed to ${value}`)
  }

  return (
    <div>
        <h3>Add A Company</h3>
        <form onSubmit={handleSubmit}>
          <label> Company Name:
            <input type="text" name="companyName" onChange={handleChange} value={formData.companyName} />
          </label>

          <label>Industry:
            <input type="text" name="industry" onChange={handleChange} value={formData.industry} />
          </label>

          <label>Company Rating:
            <input type="number" min="0" max="5" name="generalRating" onChange={handleChange} value={formData.generalRating} />
          </label>

          <label> External Recruiter?
            <input type="checkbox" name="externalRecruiter" onChange={handleChange} value={formData.externalRecruiter} />
          </label>
          <button>Save</button>
        </form>
    </div>
  )
}