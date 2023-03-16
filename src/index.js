import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Market
} from "./pages";

import {
  Headers,
  Footers
} from "./components"

ReactDOM.render(
  <Router>
    <Headers />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/market" element={<Market />} />
    </Routes>
    <Footers />
  </Router>,

  document.getElementById("root")
);
