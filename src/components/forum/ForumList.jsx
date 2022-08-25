import React from 'react'
import { ForumListContent } from './ForumList.css'
import { ForumListItem } from './ForumListItem'
import { getUserName } from '../../database/users/users'
import { comments } from '../../database/forum/forum'

export const ForumList = () => {

  return (
    <ForumListContent>
      {
        comments.map(({ user, comment, responses }, index) => {
          return (
            <ForumListItem
              key={`comment-${index}`}
              user={getUserName(user)}
              comment={comment}
              responses={responses}
            />
          )
        })
      }
    </ForumListContent>
  )
}
