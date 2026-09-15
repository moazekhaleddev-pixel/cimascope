import { useDispatch, useSelector } from "react-redux";
import { fetchAndDispatchHomeData } from "../features/home/homeSlice";
import { getFavoritesList } from "../features/favorites/favoritesSlice";
import { getWatchList } from "../features/watch/watchSlice";
import { useEffect } from "react";

export default function useRenderHome() {
  const sections = useSelector((s) => s.home.sections);
  const sectionsErrors = useSelector((s) => s.home.errorMsgs);
  const isLoading = useSelector((s) => s.home.isLoading);
  const dispatch = useDispatch();
  const isNetworkErr =
    sectionsErrors.trendingToday ===
    "Network Error: Failed to connect to the server. Please check your internet connection.";
  useEffect(() => {
    if (sections.trendingToday.length === 0) {
      dispatch(fetchAndDispatchHomeData());
      dispatch(getFavoritesList());
      dispatch(getWatchList());
    } else {
      return;
    }
  }, [dispatch, sections]);

  const sectionsConfig = [
    {
      label: "Trending Today",
      list: sections?.trendingToday,
      error: sectionsErrors?.trendingTodayErr,
      category: { type: "trending", name: "trending" },
    },
    {
      label: "Popular Movies",
      list: sections?.popularMovies,
      error: sectionsErrors?.popularMoviesErr,
      category: { type: "movie", name: "popular" },
    },
    {
      label: "Top Rated Movies",
      list: sections?.topRatedMovies,
      error: sectionsErrors?.topRatedMoviesErr,
      category: { type: "movie", name: "top_rated" },
    },
    {
      list: sections.featuredSeries,
      type: "custom-banner",
      error: sectionsErrors.featuredSeriesErr,
    },
    {
      label: "Now Playing Movies",
      list: sections?.nowPlayingMovies,
      error: sectionsErrors?.nowPlayingMoviesErr,
      category: { type: "movie", name: "now_playing" },
    },
    {
      label: "Upcoming Movies",
      list: sections?.upcomingMovies,
      error: sectionsErrors?.upcomingMoviesErr,
      category: { type: "movie", name: "upcoming" },
    },
    {
      label: "Popular TV Shows",
      list: sections?.popularTvShows,
      error: sectionsErrors?.popularTvShowsErr,
      category: { type: "tv", name: "popular" },
    },
    {
      label: "Top Rated TV Shows",
      list: sections?.topRatedTvShows,
      error: sectionsErrors?.topRatedTvShowsErr,
      category: { type: "tv", name: "top_rated" },
    },
    {
      label: "Airing Today TV Shows",
      list: sections?.airingTodayTvShows,
      error: sectionsErrors?.airingTodayTvShowsErr,
      category: { type: "tv", name: "airing_today" },
    },
  ];
  return { isLoading, isNetworkErr, sectionsErrors, sectionsConfig };
}
