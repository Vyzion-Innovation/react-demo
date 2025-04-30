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
import { BusinessList, BusinessPage, Home, Layout, LoginPage, PrivateRoutes, RoutingPaths } from './components';
import "./style.css";



function App() {
  let auth = localStorage.getItem("session");

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>

          <Route path="/" element={<Layout />}>
            <Route path={RoutingPaths.home} element={<Home />} />

            <Route path={RoutingPaths.addBusiness} element={<BusinessPage />} />
            <Route path={RoutingPaths.editBusiness} element={<BusinessPage />} />
            <Route path={RoutingPaths.businessList} element={<BusinessList />} />

          </Route>
        </Route>
        <Route path={RoutingPaths.login}
          element={auth ? <Navigate to={RoutingPaths.home} /> : <LoginPage />} />


      </Routes>
    </Router>
  );
}

export default App;
