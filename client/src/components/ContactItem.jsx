// import { FaExternalLinkAlt, FaTimesCircle } from 'react-icons/fa'
// import { useDispatch, useSelector } from 'react-redux'
// import { getContacts } from '../features/contacts/contactSlice'

function ContactItem({ contact }) {


//   const dispatch = useDispatch()

//   const { user } = useSelector((state) => state.auth)

 


   
  return (
      <>
    <div className='goal'>
      <div>Subject : {contact.subject}</div>
      <div>

      <h5>By: {contact.email} </h5>
      <p>Message: {contact.messages} </p>
    </div>
    </div>
      {/* 
      { user.result.role == 2 ? (
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <FaTimesCircle/>
      </button>
      ):(
          <button  onClick={() => { setFlag(!flag); dispatch(chooseEvent(goal._id))  } }  className='close'>
          <FaExternalLinkAlt/>
          </button>
          
          )}
        </div> */}
        </>
    
  )
}

export default ContactItem