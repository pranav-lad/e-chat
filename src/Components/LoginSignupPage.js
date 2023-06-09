import React, { useState } from 'react';
import './LoginSignupPage.css';

function LoginSignup() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleFormToggle = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleGoogleLogin = () => {
    // Handle login with Google functionality here
  };

    return (
      <div className="container">
      <div className="logo-container">
        <img src='https://png.pngtree.com/element_our/sm/20180518/sm_5afec7f1592f4.jpg' width='30px' alt="Logo" className="logo" />eChat PCCoE 
      </div>
    
        <div className="form-card">
      <div className="form-tabs">
        <button
          className={isLoginForm ? 'active' : ''}
          onClick={() => setIsLoginForm(true)}
        >
          Login
        </button>
        <button
          className={!isLoginForm ? 'active' : ''}
          onClick={() => setIsLoginForm(false)}
        >
          Sign Up
        </button>
      </div>
      <form>
        {isLoginForm ? (
          <>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </>
        ) : (
          <>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </>
        )}
      </form>
      {/* <p>
        {isLoginForm ? "Don't have an account? " : "Already have an account? "}
        <a href="#" onClick={handleFormToggle}>
          {isLoginForm ? 'Sign up here' : 'Login here'}
        </a>
      </p> */}
      <div className="google-login">
        <span>Or login with:</span>
        <button onClick={handleGoogleLogin}>Login with Google</button>
      </div>
            </div>
            </div>
  );
}

export default LoginSignup;






