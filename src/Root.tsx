import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import { Login } from "./containers/Login/Login";
import { LidarLayers } from "./containers/LidarLayers";
import { NotFound } from "./components/NotFound";

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<App />} />
        <Route path="/lidar" element={<LidarLayers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
