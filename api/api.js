const api = {
  url: "https://api.themoviedb.org/3/",
  key: "d36fb70acb8da36d2f86fd2e45014e6b",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default api;