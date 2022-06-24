export const requestType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
}

export type TRequest = keyof typeof requestType

const API_URL = {
  posts: 'posts',
  comments: 'comments',
  albums: '/albums',
  photos: '/photos',
  todos: 'todos',
  users: 'users',
  errorTest: 'error',
}

export default API_URL
