import React, { useEffect, useState } from 'react';
import requests from '../Request'
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
// import 'react-tooltip/dist/react-tooltip.css';
// import { Tooltip } from 'react-tooltip';

function Search() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const movie_id = new URLSearchParams(location.search).get('Id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requests.requestSearch}&query=${query}`);

        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  const handleValue = (event) => {
    setQuery(event.target.value);
  };

  function HandleChange(id) {
    navigate(`/detail/?id=${id}`);
  }

  // function HandleChange(id) {
  //   navigate(`/sglmovie/?id=${id}`);
  // }

  return (
    <div className="bg-black bg-cover w-screen h-screen">
     <div className="flex justify-center bg-white h-10 w-[250px] rounded p-4 ml-10 pb-2 gap-2 items-center">
  <div className="text-slate-600">
    <FaSearch />
  </div>
  <div>
    <input
      type="text"
      className="mb-4 text-black border-none pb-2 pl-2 bg-white"
      onChange={handleValue}
      placeholder='search movie'
      value={query}
    ></input>
  </div>
</div>

      {/* <Tooltip id="my-tooltip" /> */}
      <div className="flex flex-wrap justify-center min-h-screen bg-black">
        {movies &&
          movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => {
                HandleChange(movie.id);
              }}
              className="w-[150px] h-[200px] hover:w-[160px] hover:shadow-slate-700 mx-4 my-6 rounded overflow-hidden shadow-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})` }}
            ></div>
          ))}
      </div>
    </div>
  );
}

export default Search;
