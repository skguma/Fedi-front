import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';
import ReportPage from './pages/ReportPage';
import NetworkmapPage from './pages/NetworkmapPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/retweets/:tweetId" element={<NetworkmapPage />} />
            <Route path="/report" element={<ReportPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
