import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function CompanyEdit(props) {
  const { putCompany, getOneCompany } = props
  const { id } = useParams()
  const [company, setCompany] = useState({
    companyName: "",
    industry: "",
    generalRating: "0",
    externalRecruiter: "f"
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
            <input name ="companyName" type="text" onChange={handleChange} value={company.companyName}></input>
            </label>
            <label>Industry
            <input name ="industry" type="text" onChange={handleChange} value={company.industry}></input>
            </label>
            <label>Company Rating
            <input name ="companyRating" type="number" min="0" max="5" onChange={handleChange} value={company.companyRating}></input>
            </label>
            <label>External Recruiter?
            <input name ="externalRecruiter" type="checkbox" onChange={handleChange} value={company.externalRecruiter}></input>
            </label>
            <button>Update Record</button>
          </form>
 
    </div>
  )
}