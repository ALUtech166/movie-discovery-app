import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './index';
import MovieDetailPage from './pages/movies/_id';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
