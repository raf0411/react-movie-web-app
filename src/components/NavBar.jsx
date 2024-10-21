import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function NavBar() {
  const activeLink = "border-b-2 border-blue-700 font-bold";
  const inactiveLink = "";

  return (
    <header>
      <nav className="duration-300 fixed w-full h-20 flex justify-between items-center px-44 pl-10 text-yellow md:pr-10 md:pl-2 z-50">
        <div className="flex items-center justify-center align-middle gap-5">
          <Link
            to={"/"}
            className="flex items-center gap-3 text-3xl font-bold duration-200 hover:text-blue-500"
          >
            <span>🎬 </span> <span>WMoviezzz</span>
          </Link>
        </div>

        <button className="hidden sm:block hover:bg-white/10 rounded-[50%] p-2 duration-[.2s]">
          <FaBars size={24} />
        </button>

        <ul className="text-lg flex gap-20 items-center md:pl-2 md:static transition-all ease-in duration-500 sm:hidden">
          <li className="uppercase duration-[.2s] hover:font-bold sm:my-6 my-0">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="uppercase duration-[.2s] hover:font-bold sm:my-6 my-0">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
              to={"/movie"}
            >
              Movies
            </NavLink>
          </li>
          <li className="uppercase duration-[.2s] hover:font-bold sm:my-6 my-0">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
              to={"/tv"}
            >
              Series
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
