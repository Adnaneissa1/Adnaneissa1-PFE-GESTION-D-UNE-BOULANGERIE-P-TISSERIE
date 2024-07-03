import React, { useState, useEffect } from "react";
import "./contact.css";
import ScrollReveal from "scrollreveal";
import Loca from "../localization/Loca";
import Menu from "../../projet_fin/home/Menu";
import Heeder from "../../projet_fin/home/Heeder";

const Contact = () => {
  const [contactData, setContactData] = useState({
    prenom: "",
    nom: "",
    email: "",
    votre_telephone: "",
    votre_demande: "",
  });

  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.element', {
      duration: 1000,
      origin: 'bottom',
      distance: '20px',
      delay: 200,
      easing: 'ease-in-out',
      afterReveal: () => setIsVisible(true), // Set isVisible to true after reveal
    });
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
      element.style.transition = 'transform 0.5s ease-in-out';
    });

    const text = "We're delighted to have you on our website. Whether you have questions, feedback, or just want to learn more about our services, feel free to get in touch. We're here to assist you!";
    
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(prevText => prevText + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100); // Adjust the speed here (milliseconds per letter)

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    
    if (!contactData.prenom.trim()) {
      errors.prenom = "Prenom is required";
    }
    if (!contactData.nom.trim()) {
      errors.nom = "Nom is required";
    }
    if (!contactData.votre_demande.trim()) {
      errors.votre_demande = "Nom is required";
    }
    if (!contactData.email.trim()) {
      errors.email = "Email is required";
    } else if (!contactData.email.includes("@")) {
      errors.email = "Invalid email address";
    }
    const phoneRegex = /^[0-9]+$/;
    if (!contactData.votre_telephone.trim()) {
      errors.votre_telephone = "Telephone number is required";
    } else if (!phoneRegex.test(contactData.votre_telephone)) {
      errors.votre_telephone = "Invalid phone number";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log("Form submitted:", contactData);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <div className="App">
      <Menu/>
      <h1 className="element w-100 text-center" style={{marginTop:'100px'}}>Welcome To Pastries  Tanger</h1>
      <p className={isVisible ? 'element' : 'element hidden'}>{typedText}</p>
      <div className="parent_ident">
      <div className="ident">
        <input
          type="text"
          name="prenom"
          onChange={handleChange}
          value={contactData.prenom}
          placeholder="Prenom"
          className={errors.prenom ? "input error smaller-width" : "input smaller-width"}
          required
        />
        {errors.prenom && <p className="error-message">{errors.prenom}</p>}
        <input
          type="text"
          name="nom"
          onChange={handleChange}
          value={contactData.nom}
          placeholder="Nom"
          className={errors.nom ? "input error smaller-width" : "input smaller-width"}
          required
        />
        {errors.nom && <p className="error-message">{errors.nom}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={contactData.email}
          placeholder="Email"
          className={errors.email ? "input error" : "input"}
          required
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div>
        <input
          type="text"
          name="votre_telephone"
          onChange={handleChange}
          value={contactData.votre_telephone}
          placeholder="Votre telephone"
          className="input"
          required
        />
        {errors.votre_telephone && <p className="error-message">{errors.votre_telephone}</p>}
      </div>
      <div>
        <textarea
          name="votre_demande"
          onChange={handleChange}
          value={contactData.votre_demande}
          placeholder="Votre demande"
          className="input"
          required
        ></textarea>
        {errors.votre_demande && <p className="error-message">{errors.votre_demande}</p>}
      </div>
      <button className="button" onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <Loca />
      </div>
      <Heeder/>
    </div>

  );
};

export default Contact;
