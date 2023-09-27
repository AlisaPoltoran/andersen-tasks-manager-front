import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import CommonButton from '../CommonButton/CommonButton'
import axios from "axios";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '000', password: '000' })

  async function login(){
    const myJson = JSON.stringify(
      { credentials }
    )
    
    const responseJson = axios.post('http://localhost:8080/login', credentials)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(responseJson.data)
    // fetch('http://localhost:8080/login', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(credentials)
    // }).then(response => {
    //   console.log(response);
    // })
    //   .catch(error => {
    //     console.log(error);
    //   });
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