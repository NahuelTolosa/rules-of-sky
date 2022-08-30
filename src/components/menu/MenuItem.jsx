import React from 'react'
import { StyledButton } from './Menu.css'

export const MenuItem = ({ item, setPage, page }) => {

    const handleClick = (state) => {
        item !== "Tienda"
          ? setPage(state)
          : window.open("https://rulesofsky.tebex.io/")
    }

  return (
    <StyledButton onClick={() => handleClick(item)} isSelected={page}>
        {item}
    </StyledButton>
  )
}
