import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './CompanyList.css'


/**
 * List all the companies 
 */
export default function CompanyList(props) {
  const {getAllCompanies, currentUser} = props
  const [companies, setCompanies] = useState([])
  const history = useHistory()

  const displayData = (currentUser ?
    (  
      <>   
      <h3>Company List</h3>
        <ul className="companies-list">
          {companies.map((item, index) => (<li key={index}><Link to={`/companies/${item.id}`}>{item.company_name}</Link></li>))}
        </ul>
        <label><button onClick={() => history.push('/add/company')} className="action-button">Add A Company</button></label>
      </>
    )
  :
    <>
      <button onClick={() => history.push('/login')}>Login</button>
      <button onClick={() => history.push('/register')}>Register</button>
    </>
  )

  useEffect(() => {
    const fetchCompanies = async () => {
      const companyData = await getAllCompanies()
      setCompanies(companyData)
    }
    if (currentUser) {
      fetchCompanies()
    }
  },[currentUser, getAllCompanies])

  return (
    <div className="company-list-screen">
      {displayData}
    </div>
  )
}