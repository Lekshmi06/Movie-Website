import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className='flex items-center justify-center gap-5'>
        <div>
          <BsInstagram />
        </div>
        <div>
          <FaTwitter />
        </div>
        <div>
          <FaFacebookF />
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-4">
        <div>
          <span className='text-3xl text-white' >cine</span><span className='text-4xl text-orange-400'>X</span>
          <p className="text-sm">Movie Experience Like Never Before</p>
        </div>
        <div>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/contact" className="mr-4">Contact</Link>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">© 2022 cineX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
