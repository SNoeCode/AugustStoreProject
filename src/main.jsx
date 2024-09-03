import App from "./App.jsx";
import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(<CaptchaTest />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter forceRefresh={true}>
    <App />
  </BrowserRouter>
);
