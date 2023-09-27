import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import CommonButton from '../CommonButton/CommonButton'

const SignUpForm = () => {
  const [credentials, setCredentials] = useState({username: '111', password: '111'})

  const signUp = () => {
    const myJson = JSON.stringify(
      {credentials}
    )
    console.log(myJson)
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
      <CommonButton onClick={signUp}>Sign up</CommonButton>
    </div>
  )
}

export default SignUpForm