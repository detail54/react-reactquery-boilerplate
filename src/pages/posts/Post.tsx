import React from 'react'
// lib
import { useMatch } from 'react-router-dom'

const Post: React.FC = () => {
  const pathId = useMatch('post/:id')?.params.id
  const id = Number(pathId)

  const onError = (error: Error) => {
    console.log(error)
  }

  return <div>{id}</div>
}

export default Post
