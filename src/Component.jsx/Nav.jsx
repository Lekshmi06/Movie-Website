import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    return (
       <div className='flex flex-row justify-between bg-black'>
        <div className='ml-2'>
            <span className='text-3xl text-white'>cine</span><span className='text-4xl text-orange-400'>X</span>
        </div>
        <div>
           <ul className='flex flex-row gap-5 justify-between my-5'>
           <li><NavLink to="/" style={({ isActive }) => ({
                                color: isActive
                                    ? "gold"
                                    : "white",
                            })}  className="text-white hover:text-orange-400 a:text-[#90d36f]">Home</NavLink></li>
            <li>
                <div className="relative">
                    <span onClick={() => toggleDropdown('movies')} className="text-white cursor-pointer hover:text-orange-400 a:text-[#90d36f]">
                        Movies
                    </span>
                    {activeDropdown === 'movies' && (
                        <div className="absolute z-10 bg-black text-white mt-1 p-2 rounded">
                            <NavLink to="/movies/popular" className="block py-1 hover:text-orange-400"  onClick={closeDropdown}>Popular</NavLink>
                            <NavLink to="/movies/now" className="block py-1 hover:text-orange-400"  onClick={closeDropdown}>Now Playing</NavLink>
                            <NavLink to="/movies/top" className="block py-1 hover:text-orange-400"  onClick={closeDropdown}>Top Rated</NavLink>
                            <NavLink to="/movies/upcoming" className="block py-1 hover:text-orange-400"  onClick={closeDropdown}>Upcoming</NavLink>
                        </div>
                    )}
                </div>
            </li>
            <li>
                <div className="relative">
                    <span onClick={() => toggleDropdown('tv')} className="text-white cursor-pointer hover:text-orange-400 a:text-[#90d36f]">
                        TV Shows
                    </span>
                    {activeDropdown === 'tv' && (
                        <div className="absolute z-10 bg-black text-white mt-1 p-2 rounded">
                            <NavLink to="/tv/popular" className="block py-1 hover:text-orange-400"  onClick={closeDropdown}>Popular</NavLink>
                            <NavLink to="/tv/airing" className="block py-1 hover:text-orange-400"  onClick={closeDropdown}>Airing</NavLink>
                            {/* <NavLink to="/tv/top-rated" className="block py-1 hover:text-orange-400">Top Rated</NavLink>
                            <NavLink to="/tv/extra" className="block py-1 hover:text-orange-400">Extra</NavLink> */}
                        </div>
                    )}
                </div>
            </li>
           </ul>
        </div>
        <ul className='flex flex-row gap-5 my-5'>
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
