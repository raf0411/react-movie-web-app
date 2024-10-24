import React from "react";
import { Link } from "react-router-dom";
import Button, { PlayButton } from "./Button";
import api from "../../api/api";
import { category } from "../../api/tmdb";
import { FaPlayCircle } from "react-icons/fa";

function MovieCard(props) {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const background = api.w500image(item.poster_path || item.backdrop_path)
    ? api.w500image(item.poster_path || item.backdrop_path)
    : "https://critics.io/img/movies/poster-placeholder.png";

  return (
    <Link to={link} className="duration-300 hover:text-blue-500">
      <div
        className="relative bg-top bg-no-repeat bg-cover pt-[160%] rounded-xl border-4 border-solid border-blue-950 mb-1 bg-[]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] scale-0 duration-300 hover:scale-100">
          <FaPlayCircle size={64} />
        </button>
      </div>
      <h3 className="font-semibold">{item.title || item.name}</h3>
    </Link>
  );
}

export default MovieCard;
