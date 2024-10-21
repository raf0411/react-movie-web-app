import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import SeriesPage from "./pages/SeriesPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/:category/search/:keyword" element={<MoviesPage />} />
        <Route path="/:category/search/:keyword" element={<SeriesPage />} />
        <Route path="/:category" element={<MoviesPage />} />
        <Route path="/:category/:id" element={<DetailPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router}/>;
}

export default App;
