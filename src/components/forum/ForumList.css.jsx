import styled from "styled-components";
import defaultUser from '../../styles/images/icons/default-user.jpg';

export const ForumTile = styled.h1`

    color: #ddd;
    font-size: 2rem;
    margin: 1rem;

`;

export const ForumSubtile = styled.h1`

    color: #ddd;
    font-size: 1.5rem;
    margin-bottom: 2rem;

`;

export const ForumListContent = styled.div`

    display: flex;
    flex-direction: column;
    widht: 80%;

`;

export const ForumItem = styled.div`

    width: 50rem;
    min-height: 20rem;
    background-color: #eee;
    border-radius: 0.25rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

`;

export const ForumHeader = styled.div`

    background-color: #002e2b80;
    height: 15%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

export const ForumH2 = styled.h2`

    margin 0;

`;

export const UserLogo = styled.div`

    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    ${
        ({ response }) => (
            response && `
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 0.2rem;
            `
        )
    }
    background-image: url(${defaultUser});
    background-size: cover;
    background-repeat: no-repeat;

`;

export const ForumBody = styled.div`

    height: 85%;
    padding: 1rem;
    display: flex;
    flex-direction: column;

`;

export const ForumComment = styled.p`

    margin 0;
    padding: 1rem;
    border-radius: 0.3rem;
    background-color: #002e2b30;

`;

export const ForumResponseBody = styled.div`

    display: flex;
    margin-top: 0.5rem;
    padding: 0.3rem 0.3rem 0.2rem 0.3rem;
    background-color: #002e2b25;
    border-radius: 0.1rem;
    width: 95%;
    align-self: end;

`;

export const ForumResponseUser = styled.div`

    display: flex;
    justify-content: space-between;
    border-right: 0.06rem solid #002e2b11;

`;

export const UserName = styled.div`
    min-width: 5rem;
    margin: 0 0.5rem;
    text-align: start;
`;

export const ForumResponseText = styled.p`

    margin: 0 0 0 1rem;

`;