import React from 'react'
import { getUserName } from '../../database/users/users'
import { 
  ForumItem, 
  ForumHeader,
  ForumBody, 
  ForumComment, 
  ForumH2,
  UserLogo,
} from './ForumList.css'
import { ForumResponse } from './ForumResponse'

export const ForumListItem = ({ user, comment, responses }) => {

  return (
    <ForumItem>

        <ForumHeader>
          <ForumH2>
            {user}
          </ForumH2>
          <UserLogo />
        </ForumHeader>

        <ForumBody>

          <ForumComment>
            {comment}
          </ForumComment>

        {
          responses &&
          responses.map(({ user,comment }, index) => (
            <ForumResponse
              key={`response-${index}`}
              user={getUserName(user)} 
              response={comment} 
            />
            ))
        }
        

        </ForumBody>

    </ForumItem>
  )
}
