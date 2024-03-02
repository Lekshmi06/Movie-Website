import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import netflix_bg from "../assets/netflix.jpg"


const Register = () => {

  const navigate = useNavigate();

  

  const handleClickRegister = () =>{
     navigate("/login");
  };

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if(data.password !== data.confirm_password){
      setError("password doesn't match");
      return;
    }
    setError(null);

    axios
      .post('http://127.0.0.1:8000/register/', data)
      .then((response) => {
        console.log(response.data);
        
        navigate("/login")
        
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 401) {
          setError(
            "Incorrect username or password. If you do not have an account, please sign up."
          );
        } else {
          setError("An error occurred. Please try again later.");
          console.error("Error:", error.message);
        }
      });
  };

  return (
    <div className="flex items-center justify-center sm:h-screen bg-cover bg-no-repeat p-8"
    style={{ backgroundImage: `url(${netflix_bg})` }}>
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-xl overflow-hidden mb-7">
        <div className="bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg p-6">
          <div className="p-7">
            <h1 className="mb-6 text-3xl text-center text-white">Register</h1>
          </div>
          <form className="px-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <div className="mb-3 flex flex-col">
                <label className="inline-block mb-2 text-gray-400">
                  Username
                </label>
                <input
                  className="rounded-md w-full p-2 bg-gray-300 backdrop-blur-md placeholder-gray-500 text-black"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="mb-3 flex flex-col">
                <label className="inline-block mb-2 text-gray-400">
                  Password
                </label>
                <input
                  className="rounded-md w-full p-2 bg-gray-300 backdrop-blur-md placeholder-gray-500 text-black"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="mb-3 flex flex-col">
                <label className="inline-block mb-2 text-gray-400">
                  Password
                </label>
                <input
                  className="rounded-md w-full p-2 bg-gray-300 backdrop-blur-md placeholder-gray-500 text-black"
                  type="password"
                  name="confirm_password"
                  placeholder="Re-Enter your password"
                  onChange={handleChange}
                />
              </div>
            </div>

           
            <p>
              {error && (
                <div className="bg-red-500 bg-opacity-10 backdrop-filter backdrop-blur-lg  border border-red-500 text-white p-2 rounded-md mb-2 mt-4">
                  {error}
                </div>
              )}
            </p>
            <div className="mt-8 flex flex-col gap-5 justify-between">
             <button type="submit" className="bg-[#dd9c42] rounded-md w-full p-2">Register</button>
              <div className="text-gray-400 font-semibold mt-4 sm:mt-0">
                <p>Already have an account?</p>
                <a className="text-[#dd9c42] rounded hover:text-blue-900 cursor-pointer" onClick={handleClickRegister}>
                  Sign in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;