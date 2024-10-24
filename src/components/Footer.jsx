import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  const { id } = useParams();
  let background;

  if (
    pathname === "/" ||
    pathname === `/movie/${id}` ||
    pathname === `/tv/${id}`
  ) {
    background = "bg-black";
  } else {
    background = "bg-gradient-primary";
  }

  return (
    <footer className={`text-yellow ${background} py-10 relative`}>
      <div className="flex items-center justify-between m-auto px-32">
        <div>
          <span className="font-extralight">&copy; 2024</span>{" "}
          <Link
            className="font-semibold duration-300 hover:opacity-80"
            to={"/"}
          >
            WMoviezzz.com
          </Link>
        </div>
        <Link
          className="font-semibold duration-300 hover:opacity-80"
          target="_blank"
          to={"https://github.com/raf0411"}
        >
          @raf0411
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
