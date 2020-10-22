import from './api-config'

const export getAllActivities = () => {
  const resp = await api.get('/activity_logs')

  return resp.data
}

const export getOneActivity = () => {
  const resp = await api.get(`/activity_logs/${id}`)
  return resp.data
}

const export createActivity = () => {
  const resp = await api.post('/activity_logs', { activity_log: activityData })

  return resp.data
}

const export putActivity = (id, activityData) => {
  const resp = await api.put(`/activity_logs/${id}`, {activity_log: activityData})
  return resp.data
}

const export destroyActivity = () => {
  const resp = await api.delete(`/activity_logs/${id}`)
  return resp
}