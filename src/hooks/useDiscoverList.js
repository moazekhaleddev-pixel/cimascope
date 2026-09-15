import { useReducer } from "react";

const initialState = {
  totalPages: null,
  page: 1,
  list: [],
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "fetchStart":
      return {
        ...state,
        isLoading: true,
      };
    case "fetchListSucces":
      return {
        ...state,
        list: action.payload.results,
        totalPages: action.payload.totalPages,
        isLoading: false,
        page: action.payload.page,
      };
    case "fetchListFaild":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
  }
}

export default function useDiscoverList(){
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return [state,dispatch]
}