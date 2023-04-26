import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/style.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);

const link = document.createElement("link");
link.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
link.setAttribute("rel", "stylesheet");
link.setAttribute("crossorigin", "anonymous");
document.getElementsByTagName("head")[0].appendChild(link);


