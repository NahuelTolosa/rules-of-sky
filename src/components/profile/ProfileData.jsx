import React, { useState } from 'react'
import { Modal } from '../modal/Modal';
import { 
  ProfileContainer,
  UserInfo, 
  UserPicture, 
  UserInfoItem, 
  UserInfoSpan, 
  UserInfoButton, 
  UserInfoItemContainer,
  UserInfoLabel,
  EditUserInfoInput,
  EditUserPictureIcon,
} from './ProfileData.css'

export const ProfileData = () => {

  const [editData, setEditData] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const ShowUserInfo = () => (
    <>
      <UserInfo>

        <UserInfoItemContainer>
          <UserInfoLabel>
            <UserInfoSpan>
              Usuario
            </UserInfoSpan>
          </UserInfoLabel>
          <UserInfoItem>
            <UserInfoSpan>
              User
            </UserInfoSpan>
          </UserInfoItem>
        </UserInfoItemContainer>

        <UserInfoItemContainer>
          <UserInfoLabel>
            <UserInfoSpan>
              Email
            </UserInfoSpan>
          </UserInfoLabel>
          <UserInfoItem>
            <UserInfoSpan>
              user@mail.com
            </UserInfoSpan>
          </UserInfoItem>
        </UserInfoItemContainer>

        <UserInfoItemContainer>
          <UserInfoLabel>
            <UserInfoSpan>
              Discord
            </UserInfoSpan>
          </UserInfoLabel>
          <UserInfoItem>
            <UserInfoSpan>
              User#1234
            </UserInfoSpan>
          </UserInfoItem>
        </UserInfoItemContainer>

      </UserInfo>

      <UserInfoButton onClick={() => setEditData(true)}>
        <UserInfoSpan>
          EDITAR
        </UserInfoSpan>
      </UserInfoButton>
    </>
  )

  const EditUserInfo = () => (
    <>
      <UserInfo>

        <UserInfoItemContainer>
          <UserInfoLabel>
            <UserInfoSpan>
              Edita tu nombre
            </UserInfoSpan>
          </UserInfoLabel>
          <EditUserInfoInput/>
        </UserInfoItemContainer>

        <UserInfoItemContainer>
          <UserInfoLabel>
            <UserInfoSpan>
              Edita tu email
            </UserInfoSpan>
          </UserInfoLabel>
          <EditUserInfoInput/>
        </UserInfoItemContainer>

        <UserInfoItemContainer>
          <UserInfoLabel>
            <UserInfoSpan>
              Edita tu usuario de discord
            </UserInfoSpan>
          </UserInfoLabel>
          <EditUserInfoInput />
        </UserInfoItemContainer>

        <UserInfoItemContainer>
          <UserInfoLabel>
            <UserInfoSpan>
              Ingresa tu contraseña actual
            </UserInfoSpan>
          </UserInfoLabel>
          <EditUserInfoInput/>
        </UserInfoItemContainer>

        <UserInfoItemContainer>
          <UserInfoLabel>
            <UserInfoSpan>
              Ingresa tu contraseña nueva
            </UserInfoSpan>
          </UserInfoLabel>
          <EditUserInfoInput/>
        </UserInfoItemContainer>

        <UserInfoItemContainer>
          <UserInfoLabel>
            <UserInfoSpan>
              Reingresa tu contraseña nueva
            </UserInfoSpan>
          </UserInfoLabel>
          <EditUserInfoInput />
        </UserInfoItemContainer>

      </UserInfo>
      <UserInfoButton onClick={() => setEditData(false)}>
        <UserInfoSpan>
          CONFIRMAR
        </UserInfoSpan>
      </UserInfoButton>
    </>
  )

  return (
    <>

      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}

      />
      <ProfileContainer>

        <UserPicture 
          onClick={() => editData && setShowModal(true)}
          edit={editData}
        >
          {editData && <EditUserPictureIcon/>}
        </UserPicture>
          
          {
            ! editData
              ? ShowUserInfo()
              : EditUserInfo()
          }

      </ProfileContainer>
    </>
  )
}
