"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSendMessage = () => {
    if (!name && !email && !message) {
      setError("Nama , Email, dan Pesan harus diisi");
      return;
    } else if (!name) {
      setError("Nama harus diisi");
      return;
    } else if (!email) {
      setError("Email harus diisi");
      return;
    } else if (!message) {
      setError("Pesan harus diisi");
      return;
    }

    const whatsappNumber = "+6285246363578";
    const formattedPhoneNumber = whatsappNumber.replace(/\D/g, ""); // Hapus karakter non-digit
    const contact = `${formattedPhoneNumber}@c.us`;

    // Gabungkan nilai name, email, dan website ke dalam pesan
    const fullMessage = `Nama: ${name}%0AEmail: ${email}%0ALink Website: ${website}%0A${encodeURIComponent(
      message
    )}`;

    const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${fullMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <form>
      <ul>
        <li className="mb-4">
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>
        <li className="mb-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li className="mb-4">
          <input
            type="text"
            placeholder="Link Website (Opsional)"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </li>
        <li className="mb-4">
          <textarea
            placeholder="Apa yang kamu butuhin?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </li>
        <li className="mb-4 text-end">
        <button
          className="btn btn-get-into-touch"
          type="button"
          aria-label="Kirim Pesan"
          onClick={handleSendMessage}>
            
          Kirim Pesan
        </button>
        </li>
        <li>{error && <button className="btn btn-danger">{error}</button>}</li>
      </ul>
    </form>
  );
};

export default ContactForm;
