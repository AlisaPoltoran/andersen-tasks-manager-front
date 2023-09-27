import React from 'react'
import { Link } from "react-router-dom";
import SignUpForm from '../components/UI/SignUpForm/SignUpForm';

const SignUpPage = () => {
  return (
    <div>
      <SignUpForm/>
      <Link to="/login">Back to login</Link>

    </div>
  )
}

export default SignUpPage