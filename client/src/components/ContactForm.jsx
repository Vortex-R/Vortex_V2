import { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { contact } from '../features/auth/authSlice'

function GoalForm() {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        messages: ''
      })

  const { email, subject, messages } = formData


  const dispatch = useDispatch()

  const onChange = (e) => { 
    setFormData((prevSate) => ({
    ...prevSate, [e.target.name]: e.target.value,
  })) }


  const onSubmit = (e) => {
    e.preventDefault()

      const userData = {
        email, subject, messages
      }
      dispatch(contact(userData))
    
  }

  return (
      <>
    <section className="footer">
    <FaEnvelope/> <p> Contact us </p>
  </section>

  <section className="form">
    <form onSubmit={onSubmit} >
      
      <div className="form-group">
      <input type="email" 
      className="form-control" 
      id="email" name="email" value={email}
      placeholder='Enter your email' onChange={onChange} />
      </div>

      <div className="form-group">
      <input type="text" 
      className="form-control" 
      id="subject" name="subject" value={subject}
      placeholder='Enter your subject' onChange={onChange} />
      </div>

      <div className="form-group">
      <input type="textarea" 
      className="form-control" 
      id="messages" name="messages" value={messages}
      placeholder='Enter your message' onChange={onChange} />
      </div>

      <div className="form-groupe">
        <button type="submit" className="btn btn-block">Submit</button>
      </div>
    </form>
  </section>
      </>
  )
}

export default GoalForm