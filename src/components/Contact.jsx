import React from 'react';
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import me from '../assets/me.png';

function Contact() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <div name = "contact" className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="logo" />
        <div className="py-6">
          <ContactForm />
        </div>
      </header>
    </div>
  );
}

export default Contact;