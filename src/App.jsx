import { useState } from 'react'
import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages.jsx/Home'
import Navbar from './Component.jsx/Navbar'
import Wishlist from './Pages.jsx/Wishlist'
import Movies from './Pages.jsx/Movies'
import Tv from './Pages.jsx/Tv'
import Favorite from './Pages.jsx/Favorite'
import Search from './Pages.jsx/Search'
import Detail from './Pages.jsx/Detail'
function App() {
  

  return (
    <>
      <div>
         <BrowserRouter>
         <Navbar/>
          <Routes>
           
          <Route index element = {<Home />}/>
          <Route path="search" element = {<Search/>}/>
          <Route path="tv" element = {<Tv/>}/>
          <Route path="movies" element = {<Movies/>}/>
          <Route path="wishlist" element = {<Wishlist/>}/>
          <Route path="favorite" element = {<Favorite/>}/>
          <Route path="detail" element = {<Detail/>}/>
          </Routes>
         </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
