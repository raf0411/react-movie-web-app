import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const activeLink = "border-b-2 border-blue-700 font-bold";
  const activeBar = "bg-black/50";
  const inactiveLink = "";

  const transformNav = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", transformNav);

  const toggleHiddenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav
        className={`duration-300 transition-all fixed w-full h-20 flex justify-between items-center px-44 pl-10 text-yellow md:pr-10 md:pl-2 z-[99] top-0 left-0 ${
          nav ? activeBar : ""
        }`}
      >
        <div className="flex items-center justify-center align-middle gap-5">
          <Link
            to={"/"}
            className="flex items-center gap-3 text-3xl font-bold duration-200 hover:text-blue-500"
          >
            <span>🎬 </span> <span>WMoviezzz</span>
          </Link>
        </div>

        <button
          className="hidden sm:block hover:bg-white/10 rounded-[50%] p-2 duration-[.2s]"
          onClick={toggleHiddenMenu}
        >
          <FaBars size={24} />
        </button>

        {isOpen ? (
          <div className="bg-gradient-primary fixed h-[100dvh] w-[100%] top-0 left-0 flex items-center content-start text-center z-[9999] flex-col gap-16 duration-[.5s] ease ">
            <div className="flex items-center content-between gap-[250px] w-[100%] px-5 py-3">
              <h1 className="text-3xl font-bold">Menu</h1>
              <button className="" onClick={toggleHiddenMenu}>
                <IoMdClose size={32} />
              </button>
            </div>

            <ul className="flex flex-col gap-10 w-[100%]">
              <li className="uppercase duration-[.2s] hover:font-bold w-full">
                <NavLink
                  className={"bg-blue-700 px-12 py-2 rounded-xl font-bold"}
                  to={"/"}
                  onClick={toggleHiddenMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="uppercase duration-[.2s] hover:font-bold my-0">
                <NavLink
                  className={"bg-blue-700 px-12 py-2 rounded-xl font-bold"}
                  to={"/movie"}
                  onClick={toggleHiddenMenu}
                >
                  Movies
                </NavLink>
              </li>
              <li className="uppercase duration-[.2s] hover:font-bold my-0">
                <NavLink
                  className={"bg-blue-700 px-12 py-2 rounded-xl font-bold"}
                  to={"/tv"}
                  onClick={toggleHiddenMenu}
                >
                  Series
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}

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
