/*import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";


const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] =  useState(""); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password, }));
  };

  return (
    <section className="hero is-fullheight is-fullwidth">
      
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={Auth} className="box">
                {isError && <p className="has-text-centered">{message}</p>}
                <h1 className="title is-2">Sig in</h1>
                <div className="field">
                  <label className="label"></label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="admin">Admin</option>
                        <option value="operator">Operator</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">username</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={username}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="username"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="******"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                    
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

*/

// Login.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, resetAuthState } from '../features/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // Menambahkan state untuk role pengguna
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, errorMessage } = useSelector(
    (state) => state.auth
  );

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password, role })); // Menambahkan role ke data yang dikirimkan
  };

  React.useEffect(() => {
    if (isSuccess) {
      navigate('/dashboard');
      dispatch(resetAuthState());
    }
  }, [isSuccess, navigate, dispatch]);

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="operator">Operator</option>
        </select>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
        {isError && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
