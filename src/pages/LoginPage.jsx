import React from 'react'
import { Link } from "react-router-dom";
import LoginForm from '../components/UI/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <LoginForm/>
      <Link style={{display: 'flex', justifyContent: 'center'}} to="/sign-up">Sign up</Link>
    </div>
  )
}

export default LoginPage