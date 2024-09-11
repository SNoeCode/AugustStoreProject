// import reactManifest from "react-manifest";
import App from "./App.jsx";
import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter forceRefresh={true}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
