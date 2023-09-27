import React from 'react'
import classes from './CommonButton.module.css'


const CommonButton = ({children, ...props}) => {
  return (
      <button {...props} className={classes.commonBtn}>
          {children}
      </button>
  )
}

export default CommonButton