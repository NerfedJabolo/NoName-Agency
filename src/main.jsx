import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/blog" element={<></>} />
      </Routes>
    </Router>
  </StrictMode>
);
