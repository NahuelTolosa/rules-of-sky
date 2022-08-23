import React from 'react'
import { Logo, StyledFooter } from './Footer.css';

export const Footer = () => {
  return (
    <StyledFooter>
      <Logo ds onClick={() => { console.log("Discord") }} />
      {/* <Logo ros /> */}
      <Logo ip onClick={() => { console.log("IP") }} />
      {/* <Logo tt onClick={() => { console.log("Tik Tok") }} /> */}
    </StyledFooter>
  )
}
