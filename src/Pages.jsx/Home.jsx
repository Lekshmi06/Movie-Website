import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [nowplaying, setNowplaying] = useState([]);
  const [tops, setTop] = useState([]);
  const [populars, setPopular] = useState([]);
  const [upcomings, setUpcominging] = useState([]);
  const [air, setAir] = useState([]);
  const navigate = useNavigate();

  function HandleChange(id) {
    navigate(`/detail/?id=${id}`);
  }
  function HandleClick(id) {
    navigate(`/tv/detail?id=${id}`);
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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

  const n = nowplaying[Math.floor(Math.random() * nowplaying.length)];

  const [main, setMain] = useState([]);
  useEffect(() => {
    axios.get(requests.requestNowplaying).then((response) => {
      setNowplaying(response.data.results);
      const n = Math.floor(Math.random() * response.data.results.length);
      if (response.data.results.length > 0) {
        setMain(response.data.results[n]);
      }
    });
  }, []);
 

  useEffect(() => {
    // axios.get(requests.requestNowplaying)
    // .then((response)=>{
    //   setNowplaying(response.data.results)
    //   const n =nowplaying[Math.floor(Math.random() * nowplaying.length)]
    //     setMain(response.data.results[n])
    //     console.log(response.data.results[n])
    // })
    axios.get(requests.requestPopular).then((response) => {
      setPopular(response.data.results);

      console.log(response.data.results);
    });
    axios.get(requests.requestToprated).then((response) => {
      setUpcominging(response.data.results);

      console.log(response.data.results);
    });
    axios.get(requests.requestUpcoming).then((response) => {
      setTop(response.data.results);

      console.log(response.data.results);
    });
    axios.get(requests.requestAiringtv).then((response) => {
      setAir(response.data.results);

      console.log(response.data.results);
    });
  }, []);
  console.log(main);

  return (
   
    <div className="bg-black overflow-hidden">
      <div
        className="   bg-cover bg-no-repeat w-screen h-screen  "
        style={{
          backgroundImage: main.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original/${main.backdrop_path})`
            : "",
        }}
      >
        <div className="w-screen h-full bg-gradient-to-r from-black to-transparent pl-8 pt-80 pr-52">
          <div className="ml-14">
          <h1 className="text-6xl font-thin text-white mb-4">{main.title}</h1>
          <h1 className="mb-4 h-16 overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent text-gray-400" style={{ maxWidth: "500px" }}>
            {main.overview}
          </h1>
          <p className="mb-2 text-gray-400">
            Original Language: {main.original_language}
          </p>
          <p className="text-lg mb-2 text-gray-400">
            Rating: {main.vote_average}
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
      <div className="bg-black mx-14">
        <p className="text-xl mt-6 pl-5 text-white">Now Playing</p>
        <Carousel responsive={responsive}>
          {nowplaying &&
            nowplaying.map((mov) => (
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

        <p className="text-xl mt-5 pl-5 text-white">Shows airing today</p>
        <Carousel responsive={responsive}>
          {air &&
            air.map((mov) => (
              <div
              onClick={() => HandleClick(mov.id)}
                key={mov.id}
                className="relative w-[222px] h-[120px] mx-4 my-6 rounded overflow-hidden shadow-lg bg-no-repeat bg-contain transition-transform transform-gpu hover:scale-105"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${mov.backdrop_path})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  {mov.name}
                </div>
              </div>
            ))}
        </Carousel>
        <p className="text-xl mt-5 pl-5 text-white">Trending</p>
        <Carousel responsive={responsive}>
          {tops &&
            tops.map((mov) => (
               
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
        <p className="text-xl mt-5 pl-5 text-white">Popular</p>
        <Carousel responsive={responsive}>
          {populars &&
            populars.map((mov) => (
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
        <p className="text-xl mt-5 text-white pl-5">Shows airing today</p>
        <Carousel responsive={responsive}>
          {air &&
            air.map((mov) => (
              <div
              onClick={() => HandleClick(mov.id)}
                key={mov.id}
                className="relative w-[222px] h-[120px] mx-4 my-6 rounded overflow-hidden shadow-lg bg-no-repeat bg-contain transition-transform transform-gpu hover:scale-105"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${mov.backdrop_path})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  {mov.name}
                </div>
              </div>
            ))}
        </Carousel>
        <p className="text-xl mt-5 text-white pl-5">Latest</p>
        <Carousel responsive={responsive}>
          {upcomings &&
            upcomings.map((mov) => (
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

export default Home;
