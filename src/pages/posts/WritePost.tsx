import React, { useState } from 'react'
// hooks
import usePost from 'hooks/usePost'
// styles
import AddPostForm from 'components/templates/form/AddPostForm'
// lib
import { useNavigate } from 'react-router-dom'

const WritePost: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const userId = 1
  const { addPost } = usePost()
  const navigate = useNavigate()

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onChangeBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.currentTarget.value)
  }

  const mutationAdd = addPost()

  const onSubmit = async () => {
    console.log('submit')
  }

  return (
    <AddPostForm
      title={title}
      body={body}
      onChangeTitle={onChangeTitle}
      onChangeBody={onChangeBody}
      onSubmit={onSubmit}
    />
  )
}

export default WritePost
