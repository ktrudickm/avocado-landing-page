import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import AssociateApplePage from "./pages/associate-apple-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/apple-app-site-association"
          element={<AssociateApplePage />}
          onEnter={() => window.location.reload()}
        />
      </Routes>
    </Router>
  );
}

export default App;
