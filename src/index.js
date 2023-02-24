import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./css/auth.css";
import clayful from "clayful/client-js";
import axios from "axios";

clayful.install("request", require("clayful/plugins/request-axios")(axios));

clayful.config({
  client:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImVkZDhlOTkxYjE1OWZkYmJiZGJhYjZhMDU3OTY1MGZmMWYzMWZjYWY1MGUyMWQ1OGE1YmI3ZDFiZTU2MTBiMDEiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjc3MTM3OTEzLCJzdG9yZSI6IkxLSlYzWFpMVVFSOS5WOEczWkM0NFVNVjYiLCJzdWIiOiJOTTNLVVBZUUhYM1UifQ.f8jZ14OLeSHDERP-S9_7xluimiGi0p1AMVK1I14pbSw"
});



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
