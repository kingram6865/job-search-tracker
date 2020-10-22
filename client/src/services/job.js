import from './api-config'

export const getAllJob = async () => {
  const resp = await api.get('/jobs')
  return resp.data
}

export const getOneJob = async (id) => {
  const resp = await api.get(`/jobs/${id}`)
  return resp.data
}

export const postJob = async (jobData) => {
  const resp = await api.post('/jobs', {job: jobData})
  return resp.data
}

export const putJob = async (id, jobData) => {
  const resp = await api.put(`/jobs/${id}`, {job: jobData})
  return resp.data
}

export const destroyJob = async (id) => {
  const resp = await api.delete(`/jobs/${id}`)
  return resp
}