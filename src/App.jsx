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
import Footer from './Component.jsx/Footer'
import Nav from './Component.jsx/Nav'
import NowMovie from './Pages.jsx/NowMovie'
import TopMvie from './Pages.jsx/TopMvie'
import UpcomingMovie from './Pages.jsx/UpcomingMovie'
import PopularMovie from './Pages.jsx/PopularMovie'
import PopularTv from './Pages.jsx/PopularTv'
import AiringTv from './Pages.jsx/AiringTv'
import TestVdo from './Pages.jsx/TestVdo'
import Detailtv from './Pages.jsx/Detailtv'



function App() {
  

  return (
    <>
      <div>
         <BrowserRouter>
         {/* <Navbar/> */}
         <Nav/>
          <Routes>
           
          <Route index element = {<Home />}/>
          <Route path="search" element = {<Search/>}/>
          <Route path="tv" element = {<Tv/>}/>
          <Route path="movies" element = {<Movies/>}/>
          <Route path="wishlist" element = {<Wishlist/>}/>
          <Route path="favorite" element = {<Favorite/>}/>
          <Route path="detail" element = {<Detail/>}/>
          <Route path="/movies/top" element={<TopMvie />} />
          <Route path="/movies/upcoming" element={<UpcomingMovie />} />
          <Route path="/movies/popular" element={<PopularMovie />} />
          <Route path="/movies/now" element={<NowMovie />} />
          <Route path="/tv/popular" element={<PopularTv />} />
          <Route path="/tv/airing" element={<AiringTv />} />
          <Route path="/trailer" element={<TestVdo/>} />
          <Route path="/tv/detail" element={<Detailtv/>} />
         

          </Routes>
          <Footer/>
         </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
