import React from 'react'
import { ForumList } from '../../components/forum/ForumList'
import { ForumTile, ForumSubtile } from '../../components/forum/ForumList.css'

export const Forum = () => {
  return (
    <>
        <ForumTile>Bienvenido al Foro</ForumTile>
        <ForumSubtile>Aca podes comunicarte con otros mienbros del servidor</ForumSubtile>
        <ForumList />
    </>
  )
}
