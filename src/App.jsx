import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/comon/Loader";
import ProtectedRoute from "./components/comon/ProtectedRoute";
import ProtectedGuest from "./components/comon/ProtectedGuest";
const Home = lazy(()=>import("./pages/Home"))
const Trending = lazy(()=>import("./pages/Trending"))
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Search = lazy(() => import("./pages/Search"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const Series = lazy(() => import("./pages/Series"));
const SeriesDetails = lazy(() => import("./pages/SeriesDetails"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Watch = lazy(() => import("./pages/Watch"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const VideoPopup = lazy(() => import("./components/details/VideoPopup"));

export default function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Navigate to="/login" replace />} />
          <Route
            path="/login"
            element={
              <ProtectedGuest>
                <Login />
              </ProtectedGuest>
            }
          />
          <Route
            path="/cimascope"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="./home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="movies" element={<Movies />}>
               <Route path=":movieId" element={<MovieDetails />}>
                <Route path=":videoKey" element={<VideoPopup />} />
              </Route>
            </Route>
            <Route path="series" element={<Series />}>
              <Route path=":seriesId" element={<SeriesDetails />}>
                <Route path=":videoKey" element={<VideoPopup />} />
              </Route>
            </Route>
            <Route path="trending" element={<Trending />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="watched" element={<Watch />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
