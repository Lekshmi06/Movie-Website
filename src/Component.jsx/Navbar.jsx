import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
       <div className='flex flex-row justify-between bg-black '>
        <div className='ml-2'>
            <span className='text-3xl text-white' >cine</span><span className='text-4xl text-orange-400'>X</span>
        </div>
        <div >
           <ul className='flex flex-row gap-5 justify-between my-5'>
            <li><NavLink to="/" style={({ isActive }) => ({
                                color: isActive
                                    ? "gold"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323] a:text-[#90d36f]">Home</NavLink></li>
            <li><NavLink to="/movies"  style={({ isActive }) => ({
                                color: isActive
                                    ? "gold"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323] a:text-[#90d36f]">Movies</NavLink></li>
            <li><NavLink to="/tv"  style={({ isActive }) => ({
                                color: isActive
                                    ? "gold"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323] a:text-[#90d36f]">Tv shows</NavLink></li>
            {/* <li><NavLink to="/favorite"  style={({ isActive }) => ({
                                color: isActive
                                    ? "gold"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323] a:text-[#90d36f]">Favorite</NavLink></li>
            <li><NavLink to="/wishlist"  style={({ isActive }) => ({
                                color: isActive
                                    ? "gold"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323] a:text-[#90d36f]">Wishlist</NavLink></li> */}
           </ul>
        </div>
        <ul className='flex flex-row gap-5 my-5'>
            
            {/* <li><input placeholder={FaSearch}>{FaSearch}</input></li> */}
            {/* <li><NavLink to="/" style={({ isActive }) => ({
                                color: isActive
                                    ? "gold"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323] a:text-[#90d36f]">Login</NavLink></li>
            <li><NavLink to="/"  style={({ isActive }) => ({
                                color: isActive
                                    ? "gold"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323] a:text-[#90d36f]">Profile</NavLink></li>
            */}
          <li><NavLink to="search"  style={({ isActive }) => ({
                                color: isActive
                                    ? "gold"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323] a:text-[#90d36f] pr-4 ">search</NavLink></li>
                            </ul>
       </div>
    );

}
export default Navbar;