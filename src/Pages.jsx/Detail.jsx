import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import requests from '../Request';




function Detail() {
  const location = useLocation();
  const movieId = new URLSearchParams(location.search).get('id');
  const navigate = useNavigate();
  

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [showFullOverview, setShowFullOverview] = useState(false);

  const handleToggleOverview = () => {
    setShowFullOverview(!showFullOverview);
  };

  function HandleChange(id) {
    navigate(`/detail/?id=${id}`);
  }

  function HandleClick(id) {
    navigate(`/trailer/?id=${id}`);
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDcxNmY2ZWE4MmE5MDk3OTFhZDU2MzdkMGVjMzUxOSIsInN1YiI6IjY1NzE2MWU5ODg2MzQ4MDBlMzFhMDI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bBXJjzvujX6FCohfc5UlFk2BRaz3dv6PlkdslUidk1Q',
    },
  };
  const [movrec, setMovrec] = useState([]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId, options]);

  

  
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,
        options
      )
      .then((response) => {
        setMovrec(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId, options]);

  return (
    <div className='bg-black overflow-hidden'>
   <div
        className="   bg-cover bg-no-repeat w-screen h-screen  "
        style={{
          backgroundImage: movies.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})`
            : "",
        }}
      >
        <div className="w-screen h-full bg-gradient-to-r from-black to-transparent  pl-14 pt-72 pr-52">
          <div className='ml-14'>
          <h1 className="text-6xl font-thin text-white mb-4">{movies.title}</h1>
          <h1 className="mb-4 h-16 overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent text-gray-400" style={{ maxWidth: "500px" }}>
            {movies.overview}
          </h1>
          < button className='p-2 mb-6  rounded bg-orange-400'  onClick={() => HandleClick(movies.id)}>Watch Trailer</button>
          <p className="mb-2 text-gray-400">
            Original Language: {movies.original_language}
          </p>
          <p className="text-lg mb-2 text-gray-400">
            Rating: {movies.vote_average}
          </p>
          </div>
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
        <div className='mx-16'>
            <p className='text-2xl pl-5 pt-5 text-white'>More movies like this</p>
        <Carousel responsive={responsive}>
          {movrec &&
            movrec.map((mov) => (
              <div
              onClick={() => HandleChange(mov.id)}
                key={mov.id}
                className="relative w-[222px] h-[120px] mx-4 my-6 rounded overflow-hidden shadow-lg bg-no-repeat bg-contain transition-transform transform-gpu hover:scale-105"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${mov.backdrop_path})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  {mov.title}
                </div>
              </div>
            ))}
        </Carousel>
      </div>
      
    
    </div>
  );
}

export default Detail;