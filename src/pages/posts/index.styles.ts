import styled from 'styled-components'

const PostsMain = styled.main`
  width: 100vw;
  display: block;
  padding: 0 ${({ theme }) => theme.calcRem(100)};
  padding-bottom: ${({ theme }) => theme.calcRem(100)};
`

export default PostsMain
