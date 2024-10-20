import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";

function NavBar() {
  const activeLink = "border-b-2 border-blue-700";
  const inactiveLink = "";

  return (
    <nav className="fixed w-full flex justify-between items-center px-44 py-10 pl-10 text-yellow md:pr-10 md:pl-2 z-50">
      <div>
        <Link to={"/"} className="text-2xl sm:text-lg font-bold">
          <span>🎬</span> MovieWebzz.com
        </Link>
        <button className="ml-3 bg-transparent duration-[.2s] p-2 rounded-2xl hover:bg-white/10">
          <FaSearch style={{ color: "#EAD8B1" }} />
        </button>
      </div>

      <button className="hidden sm:block hover:bg-white/10 rounded-[50%] p-2 duration-[.2s]">
        <FaBars size={24}/>
      </button>

      <ul className="flex gap-20 items-center md:pl-2 md:static transition-all ease-in duration-500 sm:hidden">
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
            to={"/movies"}
          >
            Movies
          </NavLink>
        </li>
        <li className="uppercase duration-[.2s] hover:font-bold sm:my-6 my-0">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeLink : inactiveLink
            }
            to={"/series"}
          >
            Series
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
