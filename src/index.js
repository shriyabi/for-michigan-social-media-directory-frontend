import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard';
import reportWebVitals from './reportWebVitals';
import './index.css';
import LogInProfile from './LoginInfo';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login-information" element={<LogInProfile />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
