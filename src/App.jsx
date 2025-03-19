import { useState } from "react";
import "./App.css";

//* Pages
import HomePage from "./pages/homepage/HomePage";
import Countries from "./pages/countries/Countries";
import CountryDetails from "./pages/countrydetails/CountryDetails";

import Borders from "./modules/cities/Borders";
import Languages from "./modules/langs/Languages";

//* Router
import { Route, Routes, NavLink } from "react-router-dom";

//* Libraries
import clsx from "clsx";
import { FaHome } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

//* clsx funtion
const classConstructor = ({ isActive }) => {
  return clsx("nav-link", isActive && "active-link");
};

function App() {
  return (
    <>
      <nav className="app-nav">
        <ul className="app-nav-list">
          <li className="nav-item">
            <NavLink className={classConstructor} to="/">
              <FaHome />
              Home page
            </NavLink>
          </li>
          <li>
            <NavLink className={classConstructor} to="/countries">
              <FaFlag />
              Countries page
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:cca" element={<CountryDetails />}>
          <Route path="borders" element={<Borders />} />
          <Route path="languages" element={<Languages />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
