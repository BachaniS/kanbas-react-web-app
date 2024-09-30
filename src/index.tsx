import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
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