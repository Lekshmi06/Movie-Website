import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';

function TestVdo() {
  const [popular, setPopular] = useState([]);
  const location = useLocation();
  const movieId = parseInt(new URLSearchParams(location.search).get('id'));
  const key = '7d716f6ea82a909791ad5637d0ec3519';

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`)
      .then((response) => {
        setPopular(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const opts = {
    height: '540',
    width: '1480',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='w-auto overflow-hidden'>
      {popular.slice(0, 1).map((video) => (
        <div className='overflow-hidden' key={video.id}>
          <YouTube opts={opts} videoId={video.key} />
        </div>
      ))}
    </div>
  );
}

export default TestVdo;
