import React, { useState } from "react";
import "./Login.css"

function LogIn() {
  const [contact, setContact] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="loginContainer">
      <p className="loginTitle">Log in</p>
        <div className="loginInputContainer">
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
          className="loginInput"
        />
        <input
          onChange={handleChange}
          name="password"
          value={contact.password}
          placeholder="Password"
          className="loginInput"
        />
        <button className="loginButton">Log in</button>
        </div>
    </div>
  );
}

export default LogIn;
