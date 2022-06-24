import React from 'react'
// lib
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// components
import Home from 'pages/home'
import Posts from 'pages/posts'
// styles
import MainEl from './Main.styles'

const Main: React.FC = () => {
  return (
    <MainEl>
      main
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </MainEl>
  )
}

export default Main
