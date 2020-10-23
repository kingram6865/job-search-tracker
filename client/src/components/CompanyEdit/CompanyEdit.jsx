import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function CompanyEdit(props) {
  const { putCompany, getOneCompany } = props
  const { id } = useParams()
  const [company, setCompany] = useState({
    company_name: "",
    industry: "",
    general_rating: "0",
    external_recruiter: "f"
  })

  function handleChange(e) {
    const { name, value } = e.target
    setCompany({ ...company, [name]: value })
    console.log(company)
  }

  function handleSubmit(e) {
    e.preventDefault()
    putCompany(id, company)
    console.log(id, company)
  }

  useEffect(() => {
    const fetchCompany = async () => {
      const companyData = await getOneCompany(id)
      // const {companyName, industry, companyRating, externalRecruiter} = companyData
      setCompany(companyData)
    }
    fetchCompany()
  }, [getOneCompany, id])

  return(
    <div>
      <h3>Edit Company Data</h3>

          <form onSubmit={handleSubmit}>
            <label>Company Name:
            <input name ="company_name" type="text" onChange={handleChange} value={company.companyName}></input>
            </label>
            <label>Industry
            <input name ="industry" type="text" onChange={handleChange} value={company.industry}></input>
            </label>
            <label>Company Rating
            <input name ="company_rating" type="number" min="0" max="5" onChange={handleChange} value={company.companyRating}></input>
            </label>
            <label>External Recruiter?
            <input name ="external_recruiter" type="checkbox" onChange={handleChange} value={company.externalRecruiter}></input>
            </label>
            <button>Update Record</button>
          </form>
 
    </div>
  )
}