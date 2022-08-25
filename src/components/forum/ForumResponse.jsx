import React from 'react'
import { ForumResponseBody, ForumResponseText, ForumResponseUser, UserLogo, UserName } from './ForumList.css'
//key={`response-${index}`}
export const ForumResponse = ({ user, response }) => {
  return (
      <ForumResponseBody>

        <ForumResponseUser>
          <UserLogo response/>
          <UserName>
            <span>
              {user}
            </span>
          </UserName>
        </ForumResponseUser>

        <ForumResponseText>
          {response}
        </ForumResponseText>

      </ForumResponseBody>
  )
}
