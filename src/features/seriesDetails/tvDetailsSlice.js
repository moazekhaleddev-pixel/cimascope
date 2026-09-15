import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvDetails: {},
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

const tvDetailsSlice = createSlice({
  name: "tvDetails",
  initialState,
  reducers: {
    getDetailsStart(state) {
      state.tvDetails = {};
      state.videos = {};
      state.cast = {};
      state.similar = {};
      state.recommendations = {};
      state.isLoading = true;
    },
    getTvDetailsSuccess(state, action) {
      state.tvDetails = action.payload;
    },
    getTvDetailsFailed(state, action) {
      state.detailsErr = action.payload;
      state.tvDetails = {};
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
  getTvDetailsSuccess,
  getTvDetailsFailed,
  getVideosSuccess,
  getVideosFailed,
  getCastSuccess,
  getCastFailed,
  getSimilarSuccess,
  getSimilarFailed,
  getRecommendationsSuccess,
  getRecommendationsFailed,
  fetchEnded,
} = tvDetailsSlice.actions;

export function getTvDetails(id) {
  return async (dispatch) => {
    dispatch(getDetailsStart());
    try {
      const detailsPromise = fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
      const videosPromise = fetch(
        `${BASE_URL}/tv/${id}/videos?api_key=${API_KEY}`,
      );
      const castPromise = fetch(
        `${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}`,
      );
      const similarPromise = fetch(
        `${BASE_URL}/tv/${id}/similar?api_key=${API_KEY}`,
      );
      const recommendationsPromise = fetch(
        `${BASE_URL}/tv/${id}/recommendations?api_key=${API_KEY}`,
      );
      const responses = await Promise.allSettled([
        detailsPromise,
        videosPromise,
        castPromise,
        similarPromise,
        recommendationsPromise,
      ]);

      const [
        tvDetailsRes,
        videosRes,
        castRes,
        similarRes,
        recommendationsRes,
      ] = responses;

      if (tvDetailsRes.status === "fulfilled" && tvDetailsRes.value.ok) {
        const data = await tvDetailsRes.value.json();
        dispatch(getTvDetailsSuccess(data));
      } else {
        const err = tvDetailsRes.reason?.message || "Failed to fetch details";
        dispatch(getTvDetailsFailed(err));
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
        dispatch(getCastSuccess(data.cast.slice(0, 5)));
      } else {
        const err = castRes.reason?.message || "Failed to fetch cast";
        dispatch(getCastFailed(err));
      }

      if (similarRes.status === "fulfilled" && similarRes.value.ok) {
        const data = await similarRes.value.json();
        dispatch(getSimilarSuccess(data.results));
      } else {
        const err =
          similarRes.reason?.message || "Failed to fetch similar tv shows";
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
      dispatch(getTvDetailsFailed(error.message));
    } finally {
      dispatch(fetchEnded());
    }
  };
}

const tvDetailsReducer = tvDetailsSlice.reducer;
export { tvDetailsReducer };
