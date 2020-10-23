import React, { useEffect } from 'react'

export default function ActivityCreate(props) {
  const [formData, setFormData] = useState({
    action: '',
    status: '',
    followUp: '',
    jobID: 1,
    userID: 1
  })

  

  function handleChange(e) {
   const { name, value } = e.target
   setFormData(...formData, { [name]: value })
   console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()


    console.log(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Action:
          <input name="action" type="text" onChange={handleChange} value={formData.action}/>
        </label>

        <label>Status:
          <input name="status" type="text" onChange={handleChange} value={formData.status}/>
        </label>

        <label>Follow Up:
          <input name="followUp" type="textarea" onChange={handleChange} value={formData.followUp}/>
        </label>

        <label>Related Job
          <select name="jobID" type="text" onChange={handleChange} value={formData.jobID}/>
        </label>
        <button>Create</button>
      </form>
    </div>
  )
}