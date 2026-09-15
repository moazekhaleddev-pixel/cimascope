import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "../features/home/homeSlice";
import { favoritesReducer } from "../features/favorites/favoritesSlice";
import { watchReducer } from "../features/watch/watchSlice";
import { movieDetailsReducer } from "../features/moviesDetails/moviesDetailsSlice";
import { tvDetailsReducer } from "../features/seriesDetails/tvDetailsSlice";
const store = configureStore({
  reducer: {
    home: homeReducer,
    favorites: favoritesReducer,
    watch: watchReducer,
    movieDetails: movieDetailsReducer,
    tvDetails:tvDetailsReducer,
  },
});

export default store;
