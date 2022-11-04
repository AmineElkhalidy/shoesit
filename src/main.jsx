import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Routing
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Layout>
        <App />
      </Layout>
    </React.StrictMode>
  </Router>
);
