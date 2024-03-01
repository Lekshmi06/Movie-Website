import React, { useEffect, useState } from 'react';
import requests from '../Request';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';

function TopMvie() {
 
  
 
  
  
    const [populars, setPopular] = useState([]);
    const [main, setMain] = useState([]);
    const navigate = useNavigate();
  
    function HandleChange(id) {
      navigate(`/detail/?id=${id}`);
    }
  
    useEffect(() => {
      axios.get(requests. requestToprated)
        .then((response) => {
          setPopular(response.data.results);
          const n = Math.floor(Math.random() * response.data.results.length);
          if (response.data.results.length > 0) {
            setMain(response.data.results[n]);
          }
        });
    }, []);
  
    return (
      <div className='bg-black min-h-screen'>
        <p className='text-3xl  text-center text-white'>Top Rated</p>
        <div className='flex flex-wrap justify-center mb-6'>
          {populars &&
            populars.map((mov) => (
              <div
                key={mov.id}
                onClick={() => HandleChange(mov.id)}
                className="w-[150px] h-[200px] mx-4  rounded overflow-hidden shadow-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${mov.poster_path})` }}
              ></div>
            ))}
        </div>
      </div>
    );
  
  

}

export default TopMvie