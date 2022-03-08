import { useEffect, useState } from 'react'
import { FaEnvelope, FaUserEdit } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile }  from '../features/profiles/profileSlice'
import { reset } from "../features/auth/authSlice";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";




function Profile() {


    const [formData, setFormData] = useState({
        nickname: '',
        age: '',
        education: '',
        status: '',
        hobbies: '',
        VrHead: '',
        
      })

  const { nickname, age, education, status, hobbies, VrHead } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector((state) => state.auth )


  useEffect(() => {
    if ( isError) {
      toast.error(message)
    }
    // if (isSuccess || user) {
    //   navigate('/')
    // }
    
    dispatch(reset())
    
    }, [ user, isError, isSuccess, message, navigate, dispatch ] )
    
  
  const onChange = (e) => { 
    setFormData((prevSate) => ({
    ...prevSate, [e.target.name]: e.target.value,
  })) }


  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      nickname,
      age,
      education,
      status,
      hobbies,
      VrHead,
    };
    // dispatch(profile(userData))
    dispatch(updateProfile(userData));
    setFormData("");
  };

  return (
    <>
      <section className="footer10">
        <span>
          <FaUserEdit className="mb-2" />
          {"  "}
          Complete your Profile please!
        </span>
      </section>

      <section className="form9">
        <form onSubmit={onSubmit}>
          <div className="form9-group">
            <input
              type="text"
              className="form-control9"
              id="nickname"
              name="nickname"
              value={nickname}
              placeholder="Enter your nickname"
              onChange={onChange}
            />
          </div>

          <div className="form9-group">
            <input
              type="number"
              className="form9-control"
              id="age"
              name="age"
              value={age}
              placeholder="Enter your age"
              onChange={onChange}
            />
          </div>

          <div className="form9-group">
            <input
              type="text"
              className="form9-control"
              id="education"
              name="education"
              value={education}
              placeholder="Enter your education"
              onChange={onChange}
            />
          </div>

          <div className="form9-group">
            <input
              type="text"
              className="form9-control"
              id="status"
              name="status"
              value={status}
              placeholder="Enter your status"
              onChange={onChange}
            />
          </div>

          <div className="form9-group">
            <input
              type="text"
              className="form9-control"
              id="hobbies"
              name="hobbies"
              value={hobbies}
              placeholder="Enter your hobbies"
              onChange={onChange}
            />
          </div>

          <div className="form9-group">
            <input
              type="text"
              className="form9-control"
              id="VrHead"
              name="VrHead"
              value={VrHead}
              placeholder="Enter your VrHead"
              onChange={onChange}
            />
          </div>

          <div className="form9-groupe">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile