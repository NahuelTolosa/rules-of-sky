import React from 'react'
import { GalleryGrid } from '../../components/gallery/GalleryGrid'
import { GalleryTitle } from '../../components/gallery/GalleryGrid.css'

export const Gallery = () => {
  return (
    <>
        <GalleryTitle>Galeria de fotos</GalleryTitle>

        <GalleryGrid />
    </>
  )
}
