import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import HomePage from './route/HomePage/HomePage';
import AboutPage from './route/AboutPage/AboutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
      <Route path="home" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      </Routes>
  </BrowserRouter>
);
