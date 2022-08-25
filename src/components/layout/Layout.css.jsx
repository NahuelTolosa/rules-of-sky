import styled from "styled-components";
import background from '../../styles/images/photo-1.png';
import background2 from '../../styles/images/background.png';

export const Layout = styled.div`

    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #1A2B35;
    ${
        ({bg}) => (
            bg 
                ? `background-image: url(${ background });`
                : `background-image: url(${ background2 });`
        )
    }
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

`;

export const PageContent = styled.div`

    margin: 10rem 0;
    padding: 1rem 0 1rem 0;
    ${({bg}) => (
        !bg && 
        `
            background-color: #fff1;
            box-shadow: 0rem 0rem 1rem 1rem rgba(0,0,0,0.1);
        `
    )}
    width: 80%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.25rem;

}

`;