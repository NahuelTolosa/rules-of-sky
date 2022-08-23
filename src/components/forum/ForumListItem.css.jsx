import styled from "styled-components";
import defaultUser from '../../styles/images//icons/default-user.jpg';

export const StyledForumListItem = styled.div`

    width: 50rem;
    height: 20rem;
    background-color: #eee;
    border-radius: 0.25rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

`;

export const StyledForumUser = styled.div`

    background-color: #002e2b30;
    height: 15%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

export const StyledForumH2 = styled.h2`

    margin 0;

`;

export const StyledUserLogo = styled.div`

    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background-image: url(${defaultUser});
    background-size: cover;
    background-repeat: no-repeat;

`;

export const StyledForumComment = styled.div`

    height: 85%;
    padding: 1rem;

`;

export const StyledForumP = styled.p`

    margin 0;
    padding: 1rem;
    background-color: #00000007;

`;