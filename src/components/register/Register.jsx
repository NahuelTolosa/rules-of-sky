import React from 'react'
import { register } from '../../firebase/auth'

export const Register = () => {
  return (
    <>
        <button onClick={() => register("panuel@mail.com","41430479Palencio")}>
            REGISTRARSE
        </button>
    </>
  )
}
