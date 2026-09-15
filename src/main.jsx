import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import AuthProvider from "./contexts/AuthContext.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <AuthProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </AuthProvider>
    </MantineProvider>
  </StrictMode>,
);
