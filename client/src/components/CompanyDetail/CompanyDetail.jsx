import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getOneCompany } from '../../services/company'

export default function Company(props) {
  const [company, setCompany] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchCompany = async () => {
      const companyItem = await getOneCompany(id)
      setCompany(companyItem)
      console.log(companyItem)
    } 

    fetchCompany()
  }, [id])

  return (
    <div className="company-info">
      {
        company &&
        <>
          <h3>{company.company_name}</h3>
          <p>{company.industry}</p>
          <p>{company.general_rating}</p>
          {company.external_recruiter ? (<p>Recruiter</p>) : null}
          {/* {company.jobs.forEach((job) => (<p>{job}</p>))} */}
          <Link to='/companies'>Return to Company List</Link>
        </>
      }
    </div>
  )
}