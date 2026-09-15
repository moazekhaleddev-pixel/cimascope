import { createContext, useContext, useEffect, useReducer } from "react";
import { apiFetch } from "../servicies/apiFetch";
const AuthCoontext = createContext();

const initialState = {
  user: {},
  isAuthenticated: false,
  isLoading: false,
  errMsg: null,
};

function reducers(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "seasion/found":
    case "login":
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        isAuthenticated: true,
        errMsg: null,
      };
    case "logout": {
      return {
        user: {},
        isAuthenticated: false,
        isLoading: false,
        errMsg: null,
      };
    }
    case "seasion/notFound":
    case "rejected":
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
      };
    default:
      return state;
  }
}

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducers, initialState);
  const { user, isAuthenticated, isLoading, errMsg } = state;
  const BASE_URL = "https://cimascope-auth-server.vercel.app/api";
  useEffect(() => {
    async function checkUserAuth() {
      dispatch({ type: "loading" });
      try {
        const data = await apiFetch(`${BASE_URL}/auth/me`, {
          credentials: "include",
        });
        dispatch({ type: "seasion/found", payload: data });
      } catch (error) {
        dispatch({ type: "seasion/notFound", payload: error.message });
      }
    }
    checkUserAuth();
  }, []);

  async function login(email, password) {
    dispatch({ type: "loading" });

    try {
      const data = await apiFetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: "include",
      });
      dispatch({ type: "login", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  async function logout() {
    dispatch({ type: "loading" });
    try {
      const data = await apiFetch(`${BASE_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      console.log(data);
      dispatch({ type: "logout" });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
      throw error;
    }
  }
  return (
    <AuthCoontext.Provider
      value={{ user, isAuthenticated, isLoading, errMsg, login, logout }}
    >
      {children}
    </AuthCoontext.Provider>
  );
}

/* eslint-disable react-refresh/only-export-components */
export function useAuth() {
  const context = useContext(AuthCoontext);
  if (context === undefined)
    throw new Error("Auth context was used outside the Auth provider");
  return context;
}
