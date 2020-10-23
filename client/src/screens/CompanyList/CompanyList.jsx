import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

/**
 * List all the companies 
 */
export default function CompanyList(props) {
  const {getAllCompanies} = props
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    const fetchCompanies = async () => {
      const companyData = await getAllCompanies()
      setCompanies(companyData)
    }
    fetchCompanies()
  },[getAllCompanies])

  return (
    <div className="company-list-screen">
      <h3>Company List</h3>
      {
        companies && 
        <>
        <ul className="companies-list">
          {companies.map(item => (<li key={item.id}><Link to={`/companies/${item.id}`}>{item.company_name}</Link></li>))}
        </ul>
        <Link to='/add/company' className="action-button">Add A Company</Link>
        </>
      }
    </div>
  )
}