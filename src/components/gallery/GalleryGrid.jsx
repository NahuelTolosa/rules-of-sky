import React, { useState, useEffect } from 'react'
import { StyledGrid } from './GalleryGrid.css'
import { GalleryGridItem } from './GalleryGridItem'
import img1 from '../../styles/images/gallery/photo-1.png';
import img2 from '../../styles/images/gallery/photo-2.png';
import img3 from '../../styles/images/gallery/photo-3.png';
import img4 from '../../styles/images/gallery/photo-4.png';
import img5 from '../../styles/images/gallery/photo-5.png';
import img6 from '../../styles/images/gallery/photo-6.png';
import img7 from '../../styles/images/gallery/photo-7.png';
import img8 from '../../styles/images/gallery/photo-8.png';
import img9 from '../../styles/images/gallery/photo-9.png';
import img10 from '../../styles/images/gallery/photo-10.png';
import img11 from '../../styles/images/gallery/photo-11.png';
import img12 from '../../styles/images/gallery/photo-12.png';
import { Modal } from '../modal/Modal';

export const GalleryGrid = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  const handleImageClick = img => {
    setSelectedImage(img);
    setShowModal(true);
  }
  
  return (
    <>
      <Modal 
        showModal={showModal}
        onClose={()=>setShowModal(false)}
        img={selectedImage}
      />

      <StyledGrid>
        <GalleryGridItem img={img1} onClick={() => handleImageClick(img1)} />
        <GalleryGridItem img={img2} onClick={() => handleImageClick(img2)} />
        <GalleryGridItem img={img3} onClick={() => handleImageClick(img3)} />
        <GalleryGridItem img={img4} onClick={() => handleImageClick(img4)} />
        <GalleryGridItem img={img5} onClick={() => handleImageClick(img5)} />
        <GalleryGridItem img={img6} onClick={() => handleImageClick(img6)} />
        <GalleryGridItem img={img7} onClick={() => handleImageClick(img7)} />
        <GalleryGridItem img={img8} onClick={() => handleImageClick(img8)} />
        <GalleryGridItem img={img9} onClick={() => handleImageClick(img9)} />
        <GalleryGridItem img={img10} onClick={() => handleImageClick(img10)} />
        <GalleryGridItem img={img11} onClick={() => handleImageClick(img11)} />
        <GalleryGridItem img={img12} onClick={() => handleImageClick(img12)} />
      </StyledGrid>
    </>
  )
}
