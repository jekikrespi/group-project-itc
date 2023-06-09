import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";

function Signup({ setIsOpen }) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  const [feedback, setFeedback] = useState({
    color: "green",
    content: "",
  });

  const [formData, setFormData] = useState({});

  const handleFormChange = (e) => {
    if (e.target.name === "number") {
      setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSignup = async () => {
    try {
      console.log(formData);
      const res = await axios.post(
        "http://localhost:4006/api/v1/users/signup",
        formData
      );
      setFeedback({
        color: "green",
        content: "signed up successfully. please log in",
      });
    } catch (err) {
      setFeedback({
        color: "red",
        content: err.response.data?.message,
      });
    }
  };

  return (
    <div className="login__card">
      <span onClick={() => setIsOpen(false)}>x</span>
      <div className="card__top">
        <h2 className="card_title"> Signup</h2>
      </div>
      <div className="card__content">
        <input
          className="card__input"
          name="name"
          onChange={(e) => handleFormChange(e)}
          type="text"
          placeholder="first name"
          required
        />
        <input
          className="card__input"
          name="lastName"
          onChange={(e) => handleFormChange(e)}
          type="text"
          placeholder="last name"
          required
        />
        <input
          className="card__input"
          name="email"
          onChange={(e) => handleFormChange(e)}
          type="email"
          placeholder="email"
          required
        />
        <input
          className="card__input"
          name="number"
          onChange={(e) => handleFormChange(e)}
          type="number"
          placeholder="Phone number"
          required
        />
        <input
          className="card__input"
          name="password"
          onChange={(e) => handleFormChange(e)}
          type="password"
          placeholder="password"
          required
        />
        <button className="card__btn" onClick={() => handleSignup()}>
          Join For Free
        </button>
      </div>
      <p style={{ color: feedback.color }} className="card__feedback">
        {feedback.content}
      </p>
    </div>
  );
}
export default Signup;
