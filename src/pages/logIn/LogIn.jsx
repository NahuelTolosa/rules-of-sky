import React from 'react'
import { logIn } from '../../firebase/auth'

export const LogIn = () => {
  return (
    <>
      <div>LogIn</div>
      <input type="email">
      </input>
      <input type="password">
      </input>
      <button onClick={() => logIn("palencio@mail.com", "41430479")}>
        Ingresar
      </button>
    </>
  )
}
