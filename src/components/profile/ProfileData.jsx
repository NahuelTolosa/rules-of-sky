import React, { useState } from 'react'
import { 
  ProfileContainer,
  UserInfo, 
  UserPictureContainer, 
  UserInfoItem, 
  UserInfoSpan, 
  UserInfoButton, 
  EditUserInfoItem,
  EditUserInfoLabel,
  EditUserInfoInput,
} from './ProfileData.css'

export const ProfileData = () => {

  const [editData, setEditData] = useState(false);

  const ShowUserInfo = () => (
    <>
      <UserInfo>
        <UserInfoItem>
          <UserInfoSpan>
            User
          </UserInfoSpan>
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoSpan>
            user@mail.com
          </UserInfoSpan>
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoSpan>
            *************
          </UserInfoSpan>
          </UserInfoItem>
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

        <EditUserInfoItem>
          <EditUserInfoLabel>
            <UserInfoSpan>
              Edita tu nombre
            </UserInfoSpan>
          </EditUserInfoLabel>
          <EditUserInfoInput/>
        </EditUserInfoItem>

        <EditUserInfoItem>
          <EditUserInfoLabel>
            <UserInfoSpan>
              Edita tu email
            </UserInfoSpan>
          </EditUserInfoLabel>
          <EditUserInfoInput/>
        </EditUserInfoItem>

        <EditUserInfoItem>
          <EditUserInfoLabel>
            <UserInfoSpan>
              Ingresa tu contraseña actual
            </UserInfoSpan>
          </EditUserInfoLabel>
          <EditUserInfoInput/>
        </EditUserInfoItem>

        <EditUserInfoItem>
          <EditUserInfoLabel>
            <UserInfoSpan>
              Ingresa tu contraseña nueva
            </UserInfoSpan>
          </EditUserInfoLabel>
          <EditUserInfoInput/>
        </EditUserInfoItem>

        <EditUserInfoItem>
          <EditUserInfoLabel>
            <UserInfoSpan>
              Reingresa tu contraseña nueva
            </UserInfoSpan>
          </EditUserInfoLabel>
          <EditUserInfoInput />
        </EditUserInfoItem>

      </UserInfo>
      <UserInfoButton onClick={() => setEditData(false)}>
        <UserInfoSpan>
          CONFIRMAR
        </UserInfoSpan>
      </UserInfoButton>
    </>
  )

  return (
    <ProfileContainer>
        <UserPictureContainer/>
        
        {
          ! editData
            ? ShowUserInfo()
            : EditUserInfo()
        }

    </ProfileContainer>
  )
}
