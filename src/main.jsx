// import reactManifest from "react-manifest";
import App from "./App.jsx";
import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Wrapper, ScrollToTop } from "./Components/ScrollTop/ScrollTop";

// ReactDOM.render(<CaptchaTest />, document.getElementById("root"));
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path="/" element={<Root />} />
//       <Route path="/sign-up" element={<SignUp />} />
//     </Routes>
//   )
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter forceRefresh={true}>
    <App />
  </BrowserRouter>
);
