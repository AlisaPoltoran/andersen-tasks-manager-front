import React, { useState, useContext } from 'react'
import FormInput from '../FormInput/FormInput'
import CommonButton from '../CommonButton/CommonButton'
import axios from "axios";
import { AuthContext } from '../../../context/context'

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '000', password: '000' })
  const { isAuth, setIsAuth } = useContext(AuthContext)


  async function login() {
    axios.post('http://localhost:8080/login', credentials)
      .then(function (response) {
        setIsAuth({status: response.data.id !== 0 ?
          true : false, user_id: response.data.id})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='container'>
      <h1>Login</h1>
      <FormInput
        value={credentials.username}
        placeholder="login"
        onChange={e => setCredentials({ ...credentials, username: e.target.value })}

      />
      <FormInput
        value={credentials.password}
        type="password"
        placeholder="password"
        onChange={e => setCredentials({ ...credentials, password: e.target.value })}
      />
      <CommonButton onClick={login}>Log In</CommonButton>
    </div>
  )
}

export default LoginForm

// {"credentials":
//   {
//    "username":"admin",
//    "password":"12345"
//   }
// }