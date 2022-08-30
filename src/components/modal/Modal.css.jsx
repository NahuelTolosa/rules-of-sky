import styled from "styled-components";
import close from '../../styles/images/icons/close.png';

export const StyledModalContainer = styled.div`

    position: absolute;
    top: 25%;
    left: 25%;
    background-color: #ddd;
    width: 50vw;
    height: 50vh;
    z-index: 101;

`;

export const StyledModalBackground = styled.div`

    position: fixed;
    bottom: 0;
    right: 0;
    background-color: #000d;
    z-index: 100;
    width: 100vw;
    height: 100vh;

`;

export const StyledModalImage = styled.div`

    width: 100%;
    height: 100%;
    ${({ img }) =>
        img && `
        background-image: url(${img});`
    }

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;    

`;

export const StyledCloseButton = styled.button`

    border: none;
    background-image: url(${close});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: -1.5rem;
    left: 100.5%;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    border-radius: 10rem;
    transition-duration: 0.5s, 0.1s;

    &:hover {
        transform: scale(1.1);
    }

`;