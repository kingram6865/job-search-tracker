import React, { useState } from 'react'

export default function CompanyEdit(props) {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    generalRating: "0",
    externalRecruiter: "f"
  })

  const { putCompany } = props

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }


  return(
    <div>
      <h3>Edit Company Data</h3>
      <form onSubmit>
        <label>Company Name:
        <input type="text" onChange={handleChange} value={formData.companyName}></input>
        </label>
        <label>Industry
        <input type="text" onChange={handleChange} value={formData.industry}></input>
        </label>
        <label>Company Rating
        <input type="number" min="0" max="5" onChange={handleChange} value={formData.companyRating}></input>
        </label>
        <label>External Recruiter?
        <input type="checkbox" onChange={handleChange} value={formData.externalRecruiter}></input>
        </label>                        
      </form>
    </div>
  )
}