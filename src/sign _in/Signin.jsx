import React, { useState } from "react";
import "./styles/signify.css";
import axios from "axios";

const strengthLabels = ["weak", "medium", "strong"];

const Signin = () => {
  const [strength, setStrength] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const getStrength = (password) => {
    let strengthIndicator = 0;
    let upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
      }
      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
      }
      if (!lower && char >= 97 && char <= 122) {
        lower = true;
      }
    }

    if (upper) strengthIndicator++;
    if (numbers) strengthIndicator++;
    if (lower) strengthIndicator++;

    setStrength(strengthLabels[strengthIndicator] || "");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
      getStrength(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        { email, password }
      );

      console.log("Response from backend:", response.data);

      if (response.data.success) {
        const usersResponse = await axios.get("http://127.0.0.1:8000/api/utilisateurs");
        const users = usersResponse.data;

        const userMatch = users.users.find(user => user.email === email);
        console.log(userMatch);
        if (userMatch) {
          setLoginSuccess(true);
          localStorage.setItem('user', JSON.stringify(userMatch));
          if (userMatch.type === 'admin') {
            // Redirect to admin page
            window.location.href = '/admin';
          } else {
            // Redirect to user page
            window.location.href = '/';
          }
        } else {
          setLoginSuccess(false);
        }
      } else {
        setLoginSuccess(false);
      }
    } catch (err) {
      console.error("Error:", err);
    }
    setLoading(false);
  };

  return (
    <div className="login-card">
      <h2>Sign In</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="username">
          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {loading && <div id="spinner" className="spinner"></div>}
        </div>
        <input
          name="password"
          spellCheck="false"
          className="control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />

        <div>
          <div></div>
        </div>
        <div className="strength">{strength && <>{strength} password</>}</div>
        <button className="control" type="submit" disabled={loading}>
          SIGN IN
        </button>
      </form>
      {loginSuccess && <p className="success-message">Login successful!</p>}
    </div>
  );
};

export default Signin;
