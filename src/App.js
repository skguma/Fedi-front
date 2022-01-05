import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";
import ReportPage from "./pages/ReportPage";
import NetworkmapPage from "./pages/NetworkmapPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/networkmap" element={<NetworkmapPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
