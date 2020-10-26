import api from './api-config'

export const getAllActivities = async () => {
  const resp = await api.get('/activity_logs')
  return resp.data
}

export const getOneActivity = async (id) => {
  const resp = await api.get(`/activity_logs/${id}`)
  return resp.data
}

export const postActivity = async (activityData) => {
  const resp = await api.post('/activity_logs', { activity_log: activityData })
  return resp.data
}

export const putActivity = async (id, activityData) => {
  const resp = await api.put(`/activity_logs/${id}`, {activity_log: activityData})
  return resp.data
}

export const destroyActivity = async (id) => {
  const resp = await api.delete(`/activity_logs/${id}`)
  return resp
}