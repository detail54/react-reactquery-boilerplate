import React from 'react'
// hooks
import usePost from 'hooks/usePost'
// lib
import { useMatch } from 'react-router-dom'

const Post: React.FC = () => {
  const pathId = useMatch('posts/:id')?.params.id
  const id = Number(pathId)
  const onError = (error: Error) => {
    console.log(error)
  }

  const { getPost } = usePost()
  const { data: postData, isLoading, error, isError } = getPost(id, onError)

  return <div>{postData?.body}</div>
}

export default Post
