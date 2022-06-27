import React from 'react'
// lib
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// components
import Home from 'pages/home'
import Posts from 'pages/posts'
import NotFound from 'pages/notfound/NotFound'

const Main: React.FC = () => {
  return (
    <>
      main
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/post/:id' element={<Posts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Main
