import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from 'axios'

function Home() {
    const[movies, setMovies] = useState("")

    useEffect(()=>{
        axios.get(requests.requestNowplaying)
        .then((response)=>{
            setMovies(response.data)
        })
    },[])

    console.log(movies)
  return (
    <div className='text-bold text-4xl text-cemter pl-[700px]'>Home</div>
  )
}

export default Home