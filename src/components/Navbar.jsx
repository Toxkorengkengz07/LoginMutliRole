
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Park.jpg";
//import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
/*import React from "react";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <img src={logo} width="112" height="28" alt="logo" />
          </NavLink>

          <a
            href="!#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
*/

// Navbar.jsx
import React from 'react';
//import { useDispatch } from 'react-redux';
import { logOut } from '../features/authSlice'; // Mengimpor fungsi logOut dari authSlice.js

import { useSelector, useDispatch } from "react-redux";
import authSlice from "../features/authSlice";




const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut()); // Memanggil fungsi logOut saat tombol logout diklik
  };

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);


  return (
    <div>
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );

};

export default Navbar;


