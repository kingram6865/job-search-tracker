import React, { useState, useEffect } from 'react'

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
  },[])


  return (
    <div className="company-list-screen">
      Company List
      {
        companies && 
        <>
        {companies.map(item => (
          <p key={item.id}>{item.name}</p>
          ))}
        </>
      }
    </div>
  )
}


// getOneCompany
// postCompany
// putCompany
// destroyCompany