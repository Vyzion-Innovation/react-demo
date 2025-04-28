import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login';
import { RoutingPaths } from './components';
import "./style.css";



function App() {

  return (
    <Router>
    <Routes>
      <Route path={RoutingPaths.login} element={<LoginPage />} />


    </Routes>
  </Router>
  );
}

export default App;
