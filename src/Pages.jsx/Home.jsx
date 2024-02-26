import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from 'axios'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';

function Home() {

    const[nowplaying, setNowplaying] = useState([])
    const[tops, setTop] = useState([])
    const[populars, setPopular] = useState([])
    const[upcomings, setUpcominging] = useState([])
    const[air, setAir] = useState([]) 
    const navigate = useNavigate() 

    function HandleChange(id) {
      navigate(`/detail/?id=${id}`);
    }
  
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 8,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    };


    const[main, setMain] = useState([])

    useEffect(()=>{
        axios.get(requests.requestNowplaying)
        .then((response)=>{
          setNowplaying(response.data.results)
            setMain(response.data.results[0])
            console.log(response.data.results[0])
        })
        axios.get(requests.requestPopular)
        .then((response)=>{
          setPopular(response.data.results)
           
            console.log(response.data.results)
        })
        axios.get(requests. requestToprated)
        .then((response)=>{
          setUpcominging(response.data.results)
           
            console.log(response.data.results)
        })
        axios.get(requests.requestUpcoming)
        .then((response)=>{
          setTop(response.data.results)
            
            console.log(response.data.results)
        })
        axios.get(requests.  requestAiringtv)
        .then((response)=>{
          setAir(response.data.results)
           
            console.log(response.data.results)
        })

    },[])
    console.log(main)
   
  return (
    // <div className="bg-cover w-screen h-screen" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${main.backdrop_path})` }}>
    <div className='bg-black'>
    <div className="bg-cover w-screen h-screen pt-20" style={{ backgroundImage: main.backdrop_path ? `url(https://image.tmdb.org/t/p/original/${main.backdrop_path})` : '' }}>
    <div className="bg-gray-800 bg-opacity-50 mt-96 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">{main.title}</h1>
      <h1 className=" mb-4 text-white">{main.overview}</h1>
      <p className="mb-2">Original Language: {main.original_language}</p>
      <p className="text-lg mb-2">Rating: {main.vote_average}</p>
      <div className="flex space-x-4">
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Watchlist
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Add to Favorites
        </button> */}
      </div>
    </div>
    </div>
    <div className='bg-black'>
      <p className='text-xl mt-6 text-white'>Now Playing</p>
    <Carousel responsive={responsive}>
          {nowplaying &&
            nowplaying.map((mov) => (
              <div
              onClick={() => HandleChange(mov.id)}
                key={mov.id}

                className="w-[150px] h-[200px] mx-4 my-6 rounded overflow-hidden shadow-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${mov.poster_path})` }}
              ></div>
            ))}
        </Carousel>
        <p className='text-xl mt-5 text-white'>Shows airing today</p>
    <Carousel responsive={responsive}>
          {air &&
            air.map((mov) => (
              <div
              onClick={() => HandleChange(mov.id)}
                key={mov.id}

                className="w-[150px] h-[200px] mx-4 my-6 rounded overflow-hidden shadow-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${mov.poster_path})` }}
              ></div>
            ))}
        </Carousel>
        <p className='text-xl mt-5 text-white'>Trending</p>
    <Carousel responsive={responsive}>
          {tops &&
            tops.map((top) => (
              <div
              onClick={() => HandleChange(top.id)}
                key={top.id}

                className="w-[150px] h-[200px] mx-4 my-6 rounded overflow-hidden shadow-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${top.poster_path})` }}
              ></div>
            ))}
        </Carousel>
        <p className='text-xl mt-5 text-white'>Popular</p>
    <Carousel responsive={responsive}>
          {populars &&
            populars.map((mov) => (
              <div
              onClick={() => HandleChange(mov.id)}
                key={mov.id}

                className="w-[150px] h-[200px] mx-4 my-6 rounded overflow-hidden shadow-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${mov.poster_path})` }}
              ></div>
            ))}
        </Carousel>
        <p className='text-xl mt-5 text-white'>Shows airing today</p>
    <Carousel responsive={responsive}>
          {air &&
            air.map((mov) => (
              <div
              onClick={() => HandleChange(mov.id)}
                key={mov.id}

                className="w-[150px] h-[200px] mx-4 my-6 rounded overflow-hidden shadow-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${mov.poster_path})` }}
              ></div>
            ))}
        </Carousel>
        <p className='text-xl mt-5 text-white'>Latest</p>
    <Carousel responsive={responsive}>
          {upcomings &&
            upcomings.map((mov) => (
              <div
              onClick={() => HandleChange(mov.id)}
                key={mov.id}

                className="w-[150px] h-[200px] mx-4 my-6 rounded overflow-hidden shadow-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${mov.poster_path})` }}
              ></div>
            ))}
        </Carousel>
        </div>
        
  </div>
  
  )
}

export default Home