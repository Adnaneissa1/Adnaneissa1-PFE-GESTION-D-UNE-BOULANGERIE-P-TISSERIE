import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    address: "",
    phone_number: "",
  });
  const [errors, setErrors] = useState({}); // State to hold validation errors

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset the phone number error when the user changes the input
    setErrors({
      ...errors,
      phone_number: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side phone number validation
    const phoneNumberPattern = /^\d{10}$/; // Change the pattern as per your requirement
    if (!formData.phone_number.match(phoneNumberPattern)) {
      setErrors({
        ...errors,
        phone_number: ["Phone number must be 10 digits."],
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/clients",
        formData,
      );

      console.log("Response from backend:", response.data);

      setFormData({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        address: "",
        phone_number: "",
      });
      setErrors({}); // Reset error state
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setErrors(err.response.data); // Set error state with validation errors from the server
      } else {
        console.error("Error:", err); // Log other types of errors
      }
    }
  }

  return (
    <div className="login-card">
      <h2>Sign Up</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          name="prenom"
          autoComplete="off"
          spellCheck="false"
          className="control"
          type="text"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
        {/* Display validation error for prenom if it exists */}
        {errors && errors.prenom && <p className="error">{errors.prenom[0]}</p>}
        <input
          name="nom"
          autoComplete="off"
          spellCheck="false"
          className="control"
          type="text"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
        {/* Display validation error for nom if it exists */}
        {errors && errors.nom && <p className="error">{errors.nom[0]}</p>}
        <input
          name="email"
          autoComplete="off"
          spellCheck="false"
          className="control"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {/* Display validation error for email if it exists */}
        {errors && errors.email && <p className="error">{errors.email[0]}</p>}
        <input
          name="password"
          autoComplete="off"
          spellCheck="false"
          className="control"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {/* Display validation error for password if it exists */}
        {errors && errors.password && <p className="error">{errors.password[0]}</p>}
        <input
          name="address"
          autoComplete="off"
          spellCheck="false"
          className="control"
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        {/* Other input fields */}
        <input
          name="phone_number"
          autoComplete="off"
          spellCheck="false"
          className="control"
          type="text"
          placeholder="Phone"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
        {/* Display validation error for phone_number if it exists */}
        {errors && errors.phone_number && <p className="error">{errors.phone_number[0]}</p>}
        <button className="control" type="submit">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Signup;
