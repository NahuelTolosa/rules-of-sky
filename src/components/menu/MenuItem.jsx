import React from 'react'
import { StyledButton } from './Menu.css'

export const MenuItem = ({ item, setPage, page }) => {

    const handleClick = (state) => {
        setPage(state)
    }

  return (
    <StyledButton onClick={() => handleClick(item)} isSelected={page}>
        {item}
    </StyledButton>
  )
}
