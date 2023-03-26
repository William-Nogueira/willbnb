import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Main />
  </React.StrictMode>
);
