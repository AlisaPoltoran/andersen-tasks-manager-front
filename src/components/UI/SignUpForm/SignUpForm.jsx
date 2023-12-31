import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import CommonButton from '../CommonButton/CommonButton'
import axios from "axios";


const SignUpForm = () => {
  const [credentials, setCredentials] = useState({name: '', password: ''})
  
  const signUp = () => {
    const myJson = JSON.stringify(
      {credentials}
    )
    // console.log(myJson)
    axios.post('http://34.42.179.248:8085/report_sender_war/sign-up', credentials)
      // axios.post('http://localhost:8080/report_sender_war/sign-up', credentials)

          .then(function (response) {
        if (response.status === 200) {
          console.log("Account created")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    // fetch('url', {
  //   method: 'POST',
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(tasks)
  // }).then(response => {
  //   console.log(response);
  // })
  //   .catch(error => {
  //     console.log(error);
  //   });
  }

  return (
    <div className='container'>
      <h1>Sign up</h1>
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
      <CommonButton onClick={signUp}>Sign up</CommonButton>
    </div>
  )
}

export default SignUpForm