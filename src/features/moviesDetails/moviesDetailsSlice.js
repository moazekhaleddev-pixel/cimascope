import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieDetails: {},
  videos: [],
  cast: [],
  similar: [],
  recommendations: [],
  isLoading: false,
  detailsErr: null,
  videosErr: null,
  castErr: null,
  similarErr: null,
  recommendationsErr: null,
};

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const movieDetailslice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    getDetailsStart(state) {
      state.movieDetails = {};
      state.videos = {};
      state.cast = {};
      state.similar = {};
      state.recommendations = {};
      state.isLoading = true;
    },
    getMovieDetailsSuccess(state, action) {
      state.movieDetails = action.payload;
    },
    getMovieDetailsFailed(state, action) {
      state.detailsErr = action.payload;
      state.movieDetails = {};
    },
    getVideosSuccess(state, action) {
      state.videos = action.payload;
    },
    getVideosFailed(state, action) {
      state.videosErr = action.payload;
      state.videos = {};
    },
    getCastSuccess(state, action) {
      state.cast = action.payload;
    },
    getCastFailed(state, action) {
      state.castErr = action.payload;
      state.cast = {};
    },
    getSimilarSuccess(state, action) {
      state.similar = action.payload;
    },
    getSimilarFailed(state, action) {
      state.similarErr = action.payload;
      state.similar = {};
    },
    getRecommendationsSuccess(state, action) {
      state.recommendations = action.payload;
    },
    getRecommendationsFailed(state, action) {
      state.recommendationsErr = action.payload;
      state.recommendations = {};
    },
    fetchEnded(state) {
      state.isLoading = false;
    },
  },
});

const {
  getDetailsStart,
  getMovieDetailsSuccess,
  getMovieDetailsFailed,
  getVideosSuccess,
  getVideosFailed,
  getCastSuccess,
  getCastFailed,
  getSimilarSuccess,
  getSimilarFailed,
  getRecommendationsSuccess,
  getRecommendationsFailed,
  fetchEnded,
} = movieDetailslice.actions;

export function getMovieDetails(id) {
  return async (dispatch) => {
    dispatch(getDetailsStart())
    try {
      const detailsPromise = fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
      );
      const videosPromise = fetch(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`,
      );
      const castPromise = fetch(
        `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
      );
      const similarPromise = fetch(
        `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`,
      );
      const recommendationsPromise = fetch(
        `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`,
      );


      const responses = await Promise.allSettled([
        detailsPromise,
        videosPromise,
        castPromise,
        similarPromise,
        recommendationsPromise,
      ]);

      const [
        movieDetailsRes,
        videosRes,
        castRes,
        similarRes,
        recommendationsRes,
      ] = responses;

      if (movieDetailsRes.status === "fulfilled" && movieDetailsRes.value.ok) {
        const data = await movieDetailsRes.value.json();
        dispatch(getMovieDetailsSuccess(data));
      } else {
        const err =
          movieDetailsRes.reason?.message || "Failed to fetch details";
        dispatch(getMovieDetailsFailed(err));
      }

      if (videosRes.status === "fulfilled" && videosRes.value.ok) {
        const data = await videosRes.value.json();
        dispatch(getVideosSuccess(data.results));
      } else {
        const err = videosRes.reason?.message || "Failed to fetch videos";
        dispatch(getVideosFailed(err));
      }

      if (castRes.status === "fulfilled" && castRes.value.ok) {
        const data = await castRes.value.json();
        dispatch(getCastSuccess(data.cast.slice(0,5)));
      } else {
        const err = castRes.reason?.message || "Failed to fetch cast";
        dispatch(getCastFailed(err));
      }

      if (similarRes.status === "fulfilled" && similarRes.value.ok) {
        const data = await similarRes.value.json();
        dispatch(getSimilarSuccess(data.results));
      } else {
        const err =
          similarRes.reason?.message || "Failed to fetch similar movies";
        dispatch(getSimilarFailed(err));
      }

      if (
        recommendationsRes.status === "fulfilled" &&
        recommendationsRes.value.ok
      ) {
        const data = await recommendationsRes.value.json();
        dispatch(getRecommendationsSuccess(data.results));
      } else {
        const err =
          recommendationsRes.reason?.message ||
          "Failed to fetch recommendations";
        dispatch(getRecommendationsFailed(err));
      }

    } catch (error) {
      dispatch(getMovieDetailsFailed(error.message));
    } finally {
      dispatch(fetchEnded());
    }
  };
}

const movieDetailsReducer = movieDetailslice.reducer;
export { movieDetailsReducer };
