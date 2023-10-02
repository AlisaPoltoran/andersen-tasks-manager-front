import React, { useState, useContext } from 'react'
import FormInput from '../FormInput/FormInput'
import CommonButton from '../CommonButton/CommonButton'
import axios from "axios";
import { AuthContext } from '../../../context/context'

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ name: '', password: '' })
  const { isAuth, setIsAuth } = useContext(AuthContext)


  async function login() {
    axios.post('http://34.42.179.248:8085/report_sender_war/user', credentials)
      // axios.post('http://localhost:8080/report_sender_war/user', credentials)

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
        value={credentials.name}
        placeholder="login"
        onChange={e => setCredentials({ ...credentials, name: e.target.value })}

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