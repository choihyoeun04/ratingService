import React, { useState } from "react";
import "./SignUp.css"


function SignUp() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    password: "",
    adminCode: ""
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
    <div className="signupContainer">
      <h1 className="greetings">
        Hello [ {contact.name} ]
      </h1>
      <p className="greetings">Your email is [ {contact.adminCode} ] </p>
      <p className="greetings">Your Admin Code is [ {contact.adminCode} ] </p>
      <form>
        <input
          onChange={handleChange}
          className="signUpName"
          name="name"
          value={contact.name}
          placeholder="Name"
          style={{display : 'block'}}
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
          className="signupInput"
        />
        <input
          onChange={handleChange}
          name="password"
          value={contact.password}
          placeholder="Password"
          className="signupInput"
        />
        <input
          onChange={handleChange}
          name="adminCode"
          value={contact.adminCode}
          placeholder="Admin Code"
          className="signupInput"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
