import from './api-config'

export const getAllCompanies = async () => {
  const resp = await api.get('/companies')
  return resp.data
}

export const getOneCompany = async (id) => {
  const resp = await api.get(`/companies/${id}`)
  return resp.data
}

export const postCompany = async (companyData) => {
  const resp = await api.post('/companies', {company: companyData})
  return resp.data
}

export const putCompany = async (id, companyData) => {
  const resp = await api.put(`/companies/${id}`, {company: companyData})
  return resp.data
}

export const destroyCompany = async (id) => {
  const resp = await api.delete(`/companies/${id}`)
  return resp
}