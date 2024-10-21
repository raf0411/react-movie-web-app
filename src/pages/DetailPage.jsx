import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdb";
import api from "../../api/api";
import { FaCircle, FaPlayCircle, FaStar } from "react-icons/fa";
import Button, {
  WatchlistButton,
  WatchTrailerButton,
} from "../components/Button";
import CastList from "../components/CastList";

function DetailPage() {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const [director, setDirector] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
    };
    getDetail();
  }, [category, id]);

  useEffect(() => {
    const getDirector = async () => {
      const response = await tmdbApi.credits(category, id);
      setDirector(response.crew.filter(({ job }) => job === "Director"));
    };
    getDirector();
  }, [category, id]);

  const movieDate = item ? new Date(item.release_date) : null;
  const directorName = director ? director[0].name : null;
  const movieRating = item ? item.vote_average.toFixed(1) : null;
  const poster_path = item ? item.poster_path : null;
  const backdrop_path = item ? item.backdrop_path : null;
  const poster = api.w500image(poster_path || backdrop_path);

  return (
    <main>
       
    </main>
  );
}

export default DetailPage;
