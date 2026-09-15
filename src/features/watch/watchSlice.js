import { createSlice } from "@reduxjs/toolkit";
import { apiFetch } from "../../servicies/apiFetch";

const initialState = {
  watchList: [],
  notifications: [],
  isLoading: false,
  errMsg: null,
};

const watchSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {
    fetchStart(state) {
      state.isLoading = true;
    },
    fetchWatchListSucces: {
      prepare(list, message) {
        return {
          payload: {
            list,
            notification: { id: Date.now(), message },
          },
        };
      },
      reducer(state, action) {
        state.watchList = action.payload.list;
        state.notifications = [
          ...state.notifications,
          action.payload.notification,
        ];
        state.isLoading = false;
      },
    },
    addTowatchList: {
      prepare(newItem, message) {
        return {
          payload: {
            newItem,
            notification: { id: Date.now(), message },
          },
        };
      },
      reducer(state, action) {
        state.watchList = [...state.watchList, action.payload.newItem];
        state.notifications = [
          ...state.notifications,
          action.payload.notification,
        ];
        state.isLoading = false;
      },
    },
    removeFromWatch: {
      prepare(id, message) {
        return {
          payload: {
            id,
            notification: { id: Date.now(), message },
          },
        };
      },
      reducer(state, action) {
        state.watchList = state.watchList.filter(
          ({ id }) => id !== action.payload.id,
        );
        state.notifications = [
          ...state.notifications,
          action.payload.notification,
        ];
        state.isLoading = false;
      },
    },
    clearWatchNotifications(state) {
      state.notifications = [];
    },
    removeWatchNotification(state, action) {
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
  fetchWatchListSucces,
  addTowatchList,
  removeFromWatch,
  clearWatchNotifications,
  removeWatchNotification,
  fetchRejected,
} = watchSlice.actions;

export { clearWatchNotifications, removeWatchNotification };

export const getWatchList = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      const data = await apiFetch("http://localhost:3001/watched");
      dispatch(fetchWatchListSucces(data, "Watch List is ready"));
    } catch (error) {
      console.error(error.message);
      dispatch(fetchRejected("Faild to get Watch list"));
    }
  };
};

export const addItemToWatchList = (newItem) => {
  return async (dispatch) => {
    
    try {
      dispatch(fetchStart());
      const data = await apiFetch("http://localhost:3001/watched", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
      dispatch(addTowatchList(data, "Added To Watch List"));
    } catch (error) {
      console.error(error.message);
      dispatch(fetchRejected("Faild to add to Watch list"));
    }
  };
};

export const remveItemFromWatchList = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      await apiFetch(`http://localhost:3001/watched/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(removeFromWatch(id, "Removed From Watch"));
    } catch (error) {
      console.error(error.message);
      dispatch(fetchRejected("Faild to remove"));
    }
  };
};

const watchReducer = watchSlice.reducer;

export { watchReducer };
