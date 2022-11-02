import React from "react";

// Routing
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
