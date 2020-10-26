import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { verifyUser } from '../../services/auth'

export default function CompanyEdit(props) {
  const { putCompany, getOneCompany } = props
  const { id } = useParams()
  const [company, setCompany] = useState({
    company_name: "",
    industry: "",
    general_rating: "0",
    external_recruiter: "f"
  })
  const history = useHistory()

  function handleChange(e) {
    const { name, value } = e.target
    setCompany({ ...company, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    putCompany(id, company)
    history.push('/companies')
  }

  useEffect(() => {
    verifyUser()
    const fetchCompany = async () => {
      const companyData = await getOneCompany(id)
      setCompany(companyData)
    }
    fetchCompany()
  }, [getOneCompany, id])

  return(
    <div>
      <h3>Edit Company Data</h3>
        <form onSubmit={handleSubmit}>
          <label>Company Name:
          <input name ="company_name" type="text" onChange={handleChange} value={company.company_name}></input>
          </label>
          <label>Industry
          <input name ="industry" type="text" onChange={handleChange} value={company.industry}></input>
          </label>
          <label>Company Rating
          <input name ="general_rating" type="number" min="0" max="5" onChange={handleChange} value={company.general_rating}></input>
          </label>
          <label>External Recruiter?
          <input name ="external_recruiter" type="checkbox" onChange={handleChange} value={company.external_recruiter ? 't' : 'f'}></input>
          </label>
          <label><button>Update Record</button></label>
        </form>
    </div>
  )
}