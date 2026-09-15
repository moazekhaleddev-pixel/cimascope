import { apiFetch } from "../../servicies/apiFetch";
import { createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const TMDB_HOME_ENDPOINTS = {
  popularMovies: "/movie/popular",
  topRatedMovies: "/movie/top_rated",
  nowPlayingMovies: "/movie/now_playing",
  upcomingMovies: "/movie/upcoming",
  popularTvShows: "/tv/popular",
  topRatedTvShows: "/tv/top_rated",
  airingTodayTvShows: "/tv/airing_today",
  heroSection: "/trending/all/day",
  trendingToday: "/trending/all/day",
  genersTvs: "/genre/tv/list",
  genersMovies: "/genre/movie/list",
};

const initialState = {
  sections: {
    popularMovies: [],
    topRatedMovies: [],
    nowPlayingMovies: [],
    upcomingMovies: [],
    popularTvShows: [],
    topRatedTvShows: [],
    airingTodayTvShows: [],
    heroSection: [],
    trendingToday: [],
    featuredSeries: {},
  },
  geners: {},
  isLoading: true,
  errorMsgs: {
    popularMovies: null,
    topRatedMovies: null,
    nowPlayingMovies: null,
    upcomingMovies: null,
    popularTvShows: null,
    topRatedTvShows: null,
    airingTodayTvShows: null,
    heroSection: null,
    trendingToday: null,
    featuredSeries: null,
  },
};

const homeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    fetchHomeData: {
      prepare(sections, errors, geners) {
        return {
          payload: { sections, errors, geners },
        };
      },
      reducer(state, action) {
        state.sections.popularMovies = action.payload.sections.popularMovies;
        state.sections.popularMovies = action.payload.sections.popularMovies;
        state.sections.topRatedMovies = action.payload.sections.topRatedMovies;
        state.sections.nowPlayingMovies =
          action.payload.sections.nowPlayingMovies;
        state.sections.upcomingMovies = action.payload.sections.upcomingMovies;
        state.sections.popularTvShows = action.payload.sections.popularTvShows;
        state.sections.topRatedTvShows =
          action.payload.sections.topRatedTvShows;
        state.sections.airingTodayTvShows =
          action.payload.sections.airingTodayTvShows;
        state.sections.heroSection = action.payload.sections.heroSection;
        state.sections.trendingToday = action.payload.sections.trendingToday;
        state.sections.featuredSeries =
          action.payload.sections.featuredSeries || {};
        state.errorMsgs = { ...state.errorMsgs, ...action.payload.errors };
        state.isLoading = false;
        state.geners = action.payload.geners;
      },
    },
  },
});

const {  fetchHomeData } = homeSlice.actions;

export const fetchAndDispatchHomeData = () => {
  return async function fetchAndDispatchHomeData(dispatch) {
    // setting the promises 
    const keys = Object.keys(TMDB_HOME_ENDPOINTS);
    const promises = keys.map((key) =>
      apiFetch(`${BASE_URL}${TMDB_HOME_ENDPOINTS[key]}?api_key=${apiKey}`),
    );

    // fetcheng data 
    const results = await Promise.allSettled(promises);
    const payloadData = {};
    const payloadErrors = {};

    const genersTvIndex = keys.indexOf("genersTvs");
    const genersMoviesIndex = keys.indexOf("genersMovies");

    // setting geners data 
    const genersTvs =
      results[genersTvIndex]?.status === "fulfilled"
        ? results[genersTvIndex].value.genres
        : [];
    const genersMovies =
      results[genersMoviesIndex]?.status === "fulfilled"
        ? results[genersMoviesIndex].value.genres
        : [];

    // setting sections data 
    results.forEach((result, index) => {
      const key = keys[index];
      if (key === "genersTvs" || key === "genersMovies") return;

      if (result.status === "fulfilled") {
        const responseData = result.value.results || result.value;

        if (key === "heroSection") {
          payloadData[key] = Array.isArray(responseData)
            ? responseData.slice(0,10)
            : [];
        } else {
          payloadData[key] = responseData;
        }
        payloadErrors[`${key}Err`] = null;
      } else {
        payloadData[key] = [];
        payloadErrors[`${key}Err`] = result.reason?.message || "Unknown error";
      }
    });

    // setting featured section data 
    try {
      const trendingList = payloadData["trendingToday"] || [];
      const targetShow = trendingList.find((el) => el["media_type"] === "tv");

      if (targetShow) {
        const showData = await apiFetch(
          `${BASE_URL}/tv/${targetShow.id}?api_key=${apiKey}`,
        );
        payloadData["featuredSeries"] = showData;
        payloadErrors["featuredSeriesErr"] = null;
      }
    } catch (error) {
      payloadData["featuredSeries"] = {};
      payloadErrors["featuredSeriesErr"] = error.message;
    }


    dispatch(
      fetchHomeData(payloadData, payloadErrors, {
        genersMovies,
        genersTvs,
      }),
    );

    return { payloadData, payloadErrors };
  };
};

const homeReducer = homeSlice.reducer;
export { homeReducer };
