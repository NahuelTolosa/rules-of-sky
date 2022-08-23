import React from 'react'
import { 
  StyledForumListItem, 
  StyledForumUser,
  StyledForumComment, 
  StyledForumP, 
  StyledForumH2,
  StyledUserLogo
} from './ForumListItem.css'

export const ForumListItem = ({ user, comment }) => {

  return (
    <StyledForumListItem>
        <StyledForumUser>
          <StyledForumH2>
            {user}
          </StyledForumH2>
          <StyledUserLogo />
        </StyledForumUser>
        <StyledForumComment>
          <StyledForumP>
            {comment}
          </StyledForumP>
        </StyledForumComment>
    </StyledForumListItem>
  )
}
