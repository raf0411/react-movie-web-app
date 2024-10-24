import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdb";
import api from "../../api/api";
import { FaCircle, FaStar, FaUsers } from "react-icons/fa";
import { WatchlistButton, WatchTrailerButton } from "../components/Button";
import CastList from "../components/CastList";
import Modal from "../components/Modal";

function DetailPage() {
  const [open, setOpen] = useState(false);
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const [director, setDirector] = useState(null);
  const [casts, setCasts] = useState([]);

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

  useEffect(() => {
    const getCasts = async () => {
      const response = await tmdbApi.credits(category, id);
      setCasts(response.cast.slice(0, 3));
    };
    getCasts();
  }, [category, id]);

  const setModalActive = async () => {
    const modal = document.querySelector("#modal");
    const trailer = document.querySelector("#trailer");
    const videos = await tmdbApi.getVideos(category, id);

    if (videos.results.length > 0) {
      const src = `https://www.youtube.com/embed/${videos.results[1].key}`;
      trailer.setAttribute("src", src);
    } else {
      modal.removeChild(modal.lastElementChild);
      modal.querySelector("#no-trailer").textContent = "TRAILER UNAVAILABLE";
    }
  };

  return (
    <main>
      {item && director && casts && (
        <div className="w-[100%] h-screen">
          <div
            className="relative bg-center bg-no-repeat bg-cover flex flex-col justify-center items-start"
            style={{
              backgroundImage: `url(${api.originalImage(
                item ? item.backdrop_path : item.poster_path
              )})`,
            }}
          >
            <div className="flex flex-col w-full h-screen bg-black-overlay">
              <div className="flex items-center justify-evenly ml-32 mr-44 mt-32">
                <div className="flex flex-col gap-5">
                  <h2 className="text-6xl uppercase font-sans font-bold max-w-[1000px]">
                    {item.title || item.name}
                  </h2>
                  <div className="flex items-center gap-5 text-xl">
                    <div className="flex items-center gap-2">
                      {item.genres.slice(0, 3).map((g, i) => (
                        <label
                          key={i}
                          className="font-semibold text-sm bg-blue-950 px-3 py-1 rounded-2xl text-white"
                        >
                          {g.name}
                        </label>
                      ))}
                    </div>
                    <FaCircle size={8} />
                    <p className="font-bold">
                      {new Date(item.release_date).getFullYear() ||
                        new Date(item.first_air_date).getFullYear()}
                    </p>
                  </div>
                  <p className="max-w-[70%] font-serif font-extralight text-lg">
                    {item.overview}
                  </p>
                  <div className="flex items-center gap-5">
                    {category === "movie" ? (
                      <span className="font-bold text-white uppercase bg-blue-950 px-4 py-1 text-lg rounded-xl">
                        Director
                      </span>
                    ) : (
                      ""
                    )}

                    <span className="font-extralight text-lg">
                      {category === "movie"
                        ? director[0]
                          ? director[0].name
                          : ""
                        : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="font-bold text-white uppercase bg-blue-950 px-4 py-1 text-lg rounded-xl">
                      Casts
                    </span>
                    <div className="flex flex-wrap max-w-[500px]">
                      {casts.map((cast, i) => (
                        <span key={i} className="font-extralight text-lg">
                          {cast.name}, &nbsp;
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3">
                      <FaStar size={24} />
                      <span className="text-xl font-semibold">
                        {item.vote_average.toFixed(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaUsers size={24} />
                      <span className="text-xl font-semibold">
                        {item.popularity.toFixed(0)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-10">
                    <WatchTrailerButton
                      onClick={() => {
                        setModalActive();
                        setOpen(true);
                      }}
                    />
                    <WatchlistButton />
                    <Modal open={open} onClose={() => setOpen(false)}>
                      <iframe
                        allowFullScreen
                        id="trailer"
                        className="rounded-xl"
                        width="100%"
                        height="500px"
                        title="trailer"
                      ></iframe>
                    </Modal>
                  </div>
                </div>
                <img
                  className="drop-shadow-lg rounded-xl max-w-[500px] w-[300px]"
                  src={api.originalImage(
                    item ? item.poster_path : item.backdrop_path
                  )}
                  alt="movie poster"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default DetailPage;
