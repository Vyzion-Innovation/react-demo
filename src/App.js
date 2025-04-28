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
import { Layout, RoutingPaths } from './components';
import PrivateRoutes from './helper/privateRoute.js';
import Home from './pages/home';
import "./style.css";



function App() {

  return (
    <Router>
    <Routes>
      <Route path={RoutingPaths.login} element={<LoginPage />} />
      <Route element={<PrivateRoutes />}>

      <Route path="/" element={<Layout />}>
        {/* Clients routing paths */}
        <Route path={RoutingPaths.home} element={<Home />} />

       
      </Route>
</Route>
      <Route path={RoutingPaths.login}
        element={<LoginPage />} />


    </Routes>
  </Router>
  );
}

export default App;
