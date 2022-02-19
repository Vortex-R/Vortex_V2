import { FaExternalLinkAlt, FaTimesCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGoal, chooseEvent, getGoals } from '../features/goals/goalSlice'

function GoalItem({ goal,setFlag,flag }) {


  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

 


   
  return (
    <div className='goal'>
      <div>{new Date(goal.date).toLocaleString('en-US')}</div>
      <div>

      {/* <h2> Event: {goal.subject}</h2> */}
      <h2> Event: {goal.name}</h2>
      <h5>Available Tickets: {goal.attendees} </h5>

      </div>
      { user.result.role == 2 ? (
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <FaTimesCircle/>
      </button>
      ):(
        <button  onClick={() => { setFlag(!flag); dispatch(chooseEvent(goal._id))  } }  className='close'>
          <FaExternalLinkAlt/>
      </button>

      )}
    </div>
    
  )
}

export default GoalItem