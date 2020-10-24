import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

/**
 * List all the companies 
 */
export default function CompanyList(props) {
  const {getAllCompanies, currentUser} = props
  const [companies, setCompanies] = useState([])
  const [user, setUser] = useState(null)
  const history = useHistory()

  const displayData = (currentUser ?
    (  
      <>   
      <h3>Company List</h3>
        <ul className="companies-list">
          {companies.map(item => (<li key={item.id}><Link to={`/companies/${item.id}`}>{item.company_name}</Link></li>))}
        </ul>
        <button onClick={() => history.push('/add/company')} className="action-button">Add A Company</button>
      </>
    )
  :
    <>
      <button onClick={() => history.push('/login')}>Login</button>
      <button onClick={() => history.push('/register')}>Register</button>
    </>
  )

  useEffect(() => {
    setUser(currentUser)
    return () => { 
      setUser(null)
    }
  }, [user, currentUser])

  useEffect(() => {
    const fetchCompanies = async () => {
      const companyData = await getAllCompanies()
      setCompanies(companyData)
    }
    fetchCompanies()
  },[getAllCompanies])

  return (
    <div className="company-list-screen">
      {displayData}
    </div>
  )
}