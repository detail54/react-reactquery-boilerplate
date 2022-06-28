import API_URL from './api/apis'
// interface
import { IPost } from './api/interface'
// hooks
import { useQuery } from './useReactQuery'

const usePost = () => {
  const getPosts = () => {
    return useQuery<IPost[]>(API_URL.POSTS, undefined)
  }

  const getPost = (id: number) => {
    return useQuery<IPost>(API_URL.POSTS, { id })
  }

  return {
    getPosts,
    getPost,
  }
}

export default usePost
