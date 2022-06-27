import React from 'react'
// lib
import { Link } from 'react-router-dom'
// styles
import HomeMain from './index.styles'

const Home: React.FC = () => {
  return (
    <HomeMain>
      <Link to='/posts'>/posts</Link>
    </HomeMain>
  )
}

export default Home
