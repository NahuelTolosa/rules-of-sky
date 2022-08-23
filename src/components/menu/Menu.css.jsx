import styled from "styled-components";

export const StyledMenu = styled.nav`

    position: fixed;
    z-index: 100;
    width: 100%;
    margin-top: 1rem;
    min-height: 3vh;
    display: flex;
    justify-content: center;
    background-color: #0001;

`;

export const StyledButton = styled.button`

    font-size: 1.5rem;
    color: #fff;
    width: 20%;
    height: 100%;
    margin: 0;
    padding: 1rem;
    background-color: #0000;
    border: 0;
    cursor: pointer;
    ${
        ({isSelected}) => (
            isSelected && `border-bottom: 2px solid #fff2;`
        )
    }
    &:hover{
        background-color: #0001;
    }

`;