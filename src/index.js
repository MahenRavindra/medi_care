import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./screen/Common/Login";
import Register from "./screen/Common/Register";
import Pagenotfound from "./screen/Common/Pagenotfound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
        <Route path="*" element={<Pagenotfound />} />{" "}
      </Routes>{" "}
    </BrowserRouter>{" "}
  </React.StrictMode>
);
reportWebVitals();
