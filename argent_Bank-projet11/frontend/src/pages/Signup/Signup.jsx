import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isValidEmail, isValidPassword } from "../../utils/regex";
import { signupFailed, signupSuccess } from "../../redux/actions/auth.actions";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!isValidEmail(email)) {
      setErrorMessage("Invalid email adress");
      return;
    }
    if (!isValidPassword(password)) {
      console.log("password", password);
      setErrorMessage("Invalid password");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, firstName, lastName, username }),
      });
      if (response.ok) {
        navigate("/login");
      } else {
        const error = "can't create account , please try again";
        dispatch(signupFailed(error));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signin-page">
      <main className="bg-dark">
        <section className="sign-in-content">
          <i className="fa-solid fa-circle-user"></i>
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            </div>

            <div className="input-wrapper">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            </div>

            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>

            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="input-remember">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign Up</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>

          <Link to="/login">
            <span style={{ color: "black" }}>Login</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
