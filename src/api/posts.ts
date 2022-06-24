import api from '../config/axios'
import API_URL from './apis'

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export const getPosts = async (): Promise<IPost[]> => {
  try {
    const { data: posts } = await api.get(API_URL.posts)

    return posts
  } catch {
    throw new Error('error')
  }
}

export const getPost = async (id: number): Promise<IPost> => {
  const { data: post } = await api.get(`${API_URL.posts}/${id}`)

  return post
}
