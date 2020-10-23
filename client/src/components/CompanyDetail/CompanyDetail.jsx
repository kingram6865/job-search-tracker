import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { getOneCompany } from '../../services/company'
import { verifyUser } from '../../services/auth'

export default function Company(props) {
  const [company, setCompany] = useState(null)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    verifyUser()
    const fetchCompany = async () => {
      const companyItem = await getOneCompany(id)
      setCompany(companyItem)
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
          <li><Link to='/companies'>Return to Company List</Link></li>
          <button onClick={() => history.push(`/companies/${id}/edit`)}>Edit</button>
          <button onClick={()=> alert(`Deleting Company ${id}`)}>Delete</button>


        </>
      }
    </div>
  )
}