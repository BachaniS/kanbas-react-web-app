import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const home = ReactDOM.createRoot(document.getElementById("home") as HTMLElement);
home.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();