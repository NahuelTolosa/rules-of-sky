import styled from "styled-components";

export const GalleryTitle = styled.h2`

    color: #ddd;
    font-size: 2.5rem;
    margin-bottom: 2.5rem;

`;

export const StyledGrid = styled.div`

    width:80%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-auto-rows: 15rem;
    grid-gap: 1em;

`;

export const StyledGridItem = styled.div`

    border-radius: 0.1rem;
    
    &:first-child {
        @media (min-width: 1042px) {
            grid-column: 1 / span 2;
            grid-row: 1 / span 2;
        }
    }
    
    &:nth-child(8) {

        @media (min-width: 1567px) {
            grid-column: 2 / span 2;
            grid-row: 4 / span 2;
        }
        @media (min-width: 1042px) {
            grid-column: 1 / span 2;
            grid-row: 6 / span 2;
        }
        @media (min-width: 1567px) {
            grid-column: 2 / span 2;
            grid-row: 4 / span 2;
        }
    }

`;

export const StyledImage = styled.button`

    border: none;
    width: 100%;
    min-height: 100%;
    border-radius: 0.1rem;
    ${({ img }) =>
        img && `
        background-image: url(${img});`
    }
    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition-duration: 0.25s, 0.35s;
    box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(0,0,0,0.4);

    cursor: pointer;
    &:hover {
        position: relative;
        bottom: 0.01rem;
        right: 0.01rem;
        box-shadow: 0.5rem 0.5rem 2rem 0.5rem rgba(0,0,0,0.5);
        transform: scale(1.01) rotate(0.3deg);
    }

`;