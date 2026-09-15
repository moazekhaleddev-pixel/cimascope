import { createSlice } from "@reduxjs/toolkit";
import { apiFetch } from "../../servicies/apiFetch";

const initialState = {
  favoritesList: [],
  notifications: [],
  isLoading: false,
  errMsg: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    fetchStart(state) {
      state.isLoading = true;
    },
    fetchFavoritesListSucces: {
      prepare(list, message) {
        return {
          payload: {
            list,
            notification: { id: Date.now(), message },
          },
        };
      },
      reducer(state, action) {
        state.favoritesList = action.payload.list;
        state.notifications = [
          ...state.notifications,
          action.payload.notification,
        ];
        state.isLoading = false;
      },
    },
    addToFavorites: {
      prepare(newItem, message) {
        return {
          payload: {
            newItem,
            notification: { id: Date.now(), message },
          },
        };
      },
      reducer(state, action) {
        state.favoritesList = [...state.favoritesList, action.payload.newItem];
        state.notifications = [
          ...state.notifications,
          action.payload.notification,
        ];
        state.isLoading = false;
      },
    },
    removeFromFavorites: {
      prepare(id, message) {
        return {
          payload: {
            id,
            notification: { id: Date.now(), message },
          },
        };
      },
      reducer(state, action) {
        state.favoritesList = state.favoritesList.filter(
          ({ id }) => id !== action.payload.id,
        );
        state.notifications = [
          ...state.notifications,
          action.payload.notification,
        ];
        state.isLoading = false;
      },
    },
    clearFavoriteNotifications(state) {
      state.notifications = [];
    },
    removeFavoriteNotification(state, action) {
      state.notifications = state.notifications.filter(
        ({ id }) => id !== action.payload.id,
      );
    },
    fetchRejected(state, action) {
      state.errMsg = action.payload;
      state.isLoading = false;
    },
  },
});

const {
  fetchStart,
  fetchFavoritesListSucces,
  addToFavorites,
  removeFromFavorites,
  clearFavoriteNotifications,
  removeFavoriteNotification,
  fetchRejected,
} = favoritesSlice.actions;

export { clearFavoriteNotifications, removeFavoriteNotification };

export const getFavoritesList = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      const data = await apiFetch("http://localhost:3001/favorites");
      dispatch(fetchFavoritesListSucces(data, "Favorites is ready"));
    } catch (error) {
      console.error(error.message);
      dispatch(fetchRejected("Faild to get favorites list"));
    }
  };
};

export const addItemToFavoritesList = (newItem) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      const data = await apiFetch("http://localhost:3001/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
      dispatch(addToFavorites(data, "Added To Favorites"));
    } catch (error) {
      console.error(error.message);
      dispatch(fetchRejected("Faild to add to Favorites list"));
    }
  };
};

export const remveItemFromFavoritesList = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      await apiFetch(`http://localhost:3001/favorites/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(removeFromFavorites(id, "Removed From Favorites"));
    } catch (error) {
      console.error(error.message);
      dispatch(fetchRejected("Faild to remove"));
    }
  };
};

const favoritesReducer = favoritesSlice.reducer;

export { favoritesReducer };
