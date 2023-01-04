import React, { useState } from "react";

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
    <div className="container">
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          name="password"
          value={contact.password}
          placeholder="Password"
        />
        <button>Log in</button>
    </div>
  );
}

export default LogIn;
