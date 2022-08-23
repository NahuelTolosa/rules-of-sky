import React from 'react'
import { StyledGridItem, StyledImage } from './GalleryGrid.css'

export const GalleryGridItem = ({onClick, img}) => {
  return (
    <StyledGridItem onClick={onClick}>
      <StyledImage img={img}/>
    </StyledGridItem>
  )
}
