import React from 'react'
import { StyledCloseButton, StyledModalBackground, StyledModalContainer, StyledModalImage } from './Modal.css'

export const Modal = ({showModal, onClose, img, text}) => (
    showModal &&
    <StyledModalBackground>
        <StyledModalContainer>
            <StyledCloseButton onClick={()=>onClose()}/>
                {img && <StyledModalImage img={img} />}
        </StyledModalContainer>
    </StyledModalBackground>
)

