import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [formData, setFormData] = useState({
    name: '',
    attendees: '',
    date: ''
  })

  const { name, attendees, date } = formData


  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const eventData = {
      name, attendees, date
    }

    dispatch(createGoal( eventData ))
    // setFormData('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Event</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter event name'
            value={name}
            onChange={onChange}
          />
          <input
            type='text'
            name='attendees'
            id='attendees'
            placeholder='Enter attendees`s number'
            value={attendees}
            onChange={onChange}
          />
          <input
            type='datetime-local'
            name='date'
            id='date'
            placeholder='Enter event date'
            value={date}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Event
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm