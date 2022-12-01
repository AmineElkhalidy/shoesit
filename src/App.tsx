import React from "react";

// Routing
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Gender from "./pages/Gender";
import Brand from "./pages/Brand";
import Shoes from "./pages/Shoes";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gender" element={<Gender />} />
      <Route path="/gender/:gender/brand" element={<Brand />} />
      <Route path="/gender/:gender/brand/:brand" element={<Shoes />} />
      <Route path="*" element={<NotFound />} exact />
    </Routes>
  );
};

export default App;
