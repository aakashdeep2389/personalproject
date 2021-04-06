import React, { useEffect,useState  } from 'react'
import axios from 'axios';
import { loginAdmin } from '../_services/user_service'

const Login = () => {
  const [state, setstate] = useState({
    email: '',
    password: '',
  })
  let { email, password } = state

  onchange = (type,e)=> {
    setstate({
      ...state,
      [type]: e
    })
    console.log(type, '8787787787', e)
  }

  const handleSubmit = () => {
    const params = {
      deviceId: '1',
      deviceToken: '1',
      platform: '1',
      email: email,
      password : password
    }
    loginAdmin(params)
      .then(result => {
        console.log('54554545454', result)
      })
  }
  useEffect(() => {
    console.log('1111111', axios.defaults.headers.common)
  }, [])
  return (
    <div>
      <div className="body-container-wrapper">
        <div className="offset-4 col-4">
          <h1 className="display-h1">Login conditional checking</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label" >Email</label>
              <input type="email" className="form-control" name="email" value={email} onChange={e=>onchange('email', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="label" >Password</label>
              <input type="password" className="form-control" name="password" value={password} onChange={e=>onchange('password', e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success m-3" >Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
