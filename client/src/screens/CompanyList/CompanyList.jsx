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
      // console.log(companyData)
      setCompanies(companyData)
    }
    fetchCompanies()
  },[getAllCompanies])

  // const output = companies && {
  //     companies.map((item, index) => (<p key={index}>Company{}</p>))
  //       }

  return (
    <div className="company-list-screen">
      <h3>Company List</h3>
      {
        companies && 
        <>
        <ul className="companies-list">
          <li>{companies.map(item => (
            <Link key={item.id} to={`/companies/${item.id}`}>{item.company_name}</Link>
            ))}
          </li>
        </ul>
        </>
      }
    </div>
  )
}


// getOneCompany
// postCompany
// putCompany
// destroyCompany