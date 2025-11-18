import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const Navbar = () => {
  const { logout,user } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => console.log("Logged out successfully"))
      .catch(err => console.log(err.message));
  };

  const links = (
    <>
      <li><a className="hover:text-primary transition">Home</a></li>
      <li><a className="hover:text-primary transition">Markets</a></li>
      <li><a className="hover:text-primary transition">Portfolio</a></li>
      <li><a className="hover:text-primary transition">Contact</a></li>
    </>
  );

  return (
    <div className="navbar bg-[#0A0F1F] text-white px-4 lg:px-10 border-b border-[#1A253A] shadow-md">

      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 bg-[#0A0F1F] text-white rounded-box w-52 p-2 shadow border border-[#1A253A]">
            {links}
          </ul>
        </div>

        {/* Logo */}
        <a className="text-xl font-bold tracking-wide bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] bg-clip-text text-transparent">
          QTrade
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg gap-2">
          {links}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogout} // FIXED
            className="btn bg-gradient-to-r from-[#FF5656] to-[#FF9A56] text-white font-semibold hover:opacity-80 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] border-none text-black font-semibold hover:opacity-80 transition"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
