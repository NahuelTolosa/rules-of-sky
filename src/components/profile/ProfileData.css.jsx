import styled from "styled-components";
import defaultUser from '../../styles/images/icons/default-user.jpg';

export const ProfileContainer = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;    

`;

export const UserPictureContainer = styled.div`

    display: flex;
    flex-direction: row;
    width: 11rem;
    height: 11rem;
    margin: 1rem auto 0 auto;
    transition-duration: 0.25s, 0.35s;
    box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(0,0,0,0.4);
    &:hover {
        position: relative;
        bottom: 0.01rem;
        right: 0.01rem;
        box-shadow: 0rem 0rem 1rem 0.5rem rgba(0,0,0,0.401);
        transform: scale(1.005);
    }
    border-radius: 1rem;
    background-image: url(${defaultUser});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`;

export const UserInfo = styled.div`
    
    width: 35%;
    display: flex;
    padding: 1rem 0;
    min-height: 25rem;
    margin: 1.5rem auto;
    border-radius: 1rem;
    flex-direction: column;
    background-color: #002e2b80;
    justify-content: space-around;
    box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(0,0,0,0.4);

`;

export const UserInfoItem = styled.div`

    width: 90%;
    height: 3rem;
    background-color: #ccc;
    border-radius: 0.5rem;
    margin: auto;
    box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(0,0,0,0.4);
    transition-duration: 0.25s, 0.35s;
    display: flex;
    &:hover {
        position: relative;
        bottom: 0.01rem;
        right: 0.01rem;
        box-shadow: 0rem 0rem 1rem 0.5rem rgba(0,0,0,0.401);
        transform: scale(1.005);
        border-radius: 0.45rem;
    }

`;

export const UserInfoSpan = styled.span`

    margin: auto;
    font-size: 1.5rem;
    font-weight: bolder;

`;

export const UserInfoButton = styled.button`

    width: 7rem;
    border: none;
    height: 3rem;
    display: flex;
    cursor: pointer;
    border-radius: 0.5rem;
    margin: 0 2rem 1rem auto;
    background-color: #002e2b70;
    transition-duration: 0.25s, 0.35s;
    box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(0,0,0,0.4);
    &:hover {
        position: relative;
        bottom: 0.01rem;
        right: 0.01rem;
        transform: scale(1.005);
        box-shadow: 0.1rem 0.1rem 1rem 0.5rem rgba(0,0,0,0.5);
        border-radius: 0.45rem;
    }
    & > span {
        color: #ccc;
        font-size: 1rem;
    }

`;

export const EditUserInfoForm = styled.form`

    margin: 0;
    padding: 0;
    width: 100;
    height: 100;

`;

export const EditUserInfoItem = styled.div`

    display: flex;
    margin-bottom: 1.5rem;
    flex-direction: column;

`;

export const EditUserInfoLabel = styled.label`

    margin: auto auto 0.2rem 5%;
    & > span {
        color: #ccc;
        font-size: 1rem;
    }

`;

export const EditUserInfoInput = styled.input`

    width: 90%;
    border: none;
    height: 3rem;
    font-size: 1.5rem;
    background-color: #ccc;
    border-radius: 0.5rem;
    margin: auto;
    box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(0,0,0,0.4);
    transition-duration: 0.25s, 0.35s;
    display: flex;
    &:hover {
        position: relative;
        bottom: 0.01rem;
        right: 0.01rem;
        box-shadow: 0rem 0rem 1rem 0.5rem rgba(0,0,0,0.401);
        transform: scale(1.005);
        border-radius: 0.45rem;
    }

`;