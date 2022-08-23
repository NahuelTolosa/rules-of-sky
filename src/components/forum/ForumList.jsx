import React from 'react'
import { StyledForumList } from './ForumList.css'
import { ForumListItem } from './ForumListItem'
import { getUserName } from '../../database/users/users'
import { comments } from '../../database/forum/forum'

export const ForumList = () => {

  return (
    <StyledForumList>
      {
        comments.map(({user, comment}) => {
          return (
            <ForumListItem user={getUserName(user)} comment={comment} />
          )
        })
      }
    </StyledForumList>
  )
}
