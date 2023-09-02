import "@/global.less";
import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="App" id="rootApp">
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </div>
);
