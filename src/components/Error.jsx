import React from 'react'
import styles from './Error.module.css'

const Error = ({mensaje}) => {
  return (
    <div className={styles.error}>
        <p>{mensaje}</p>
    </div> 
  )
}

export default Error