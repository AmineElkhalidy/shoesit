import React from "react";

// Routing
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Gender from "./pages/Gender";
import Brand from "./pages/Brand";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gender" element={<Gender />} />
      <Route path="/gender/:genderType/brand" element={<Brand />} />
    </Routes>
  );
};

export default App;
