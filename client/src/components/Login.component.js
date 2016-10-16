import React from 'react';

const Login = (props) => {
  return (
    <div className="login__container flexify">
      <h3>A bag of Apps</h3>
      <div className="login__form flexify">
        <div className="login__form-field">
          <label className="login__form-label" htmlFor="">Username</label>
          <input className="login__form-input" id="username" onChange={props.handleChange} type="text" />
        </div>
        <div className="login__form-field">
          <label className="login__form-label" htmlFor="">Password</label>
          <input className="login__form-input" id="password" onChange={props.handleChange} type="text" />
        </div>
        <button className="btn" onClick={props.handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
