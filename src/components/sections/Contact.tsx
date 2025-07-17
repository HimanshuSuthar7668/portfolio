"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_gu2hyc8", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_oskni6c", form, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "GkS8OJ-3mjKk_P2Tc")
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setError("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-16 px-6 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>

      {submitted ? (
        <div className="text-green-600">Thanks! I'll get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="name" className="text-sm text-gray-700">
              Name
            </label>
            <input name="name" id="name" type="text" required className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring" />
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-gray-700">
              Email
            </label>
            <input name="email" id="email" type="email" required className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring" />
          </div>

          <div>
            <label htmlFor="message" className="text-sm text-gray-700">
              Message
            </label>
            <textarea name="message" id="message" required rows={4} className="w-full border border-gray-300 p-3 resize-none rounded focus:outline-none focus:ring" />
          </div>

          <div className="text-right">
            <button type="submit" disabled={loading} className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-5 py-2 rounded transition">
              {loading ? "Sending..." : "Send"}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      )}

      <div className="mt-10 flex justify-center gap-6 text-2xl">
        <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:opacity-80">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:opacity-80">
          <FaLinkedin />
        </a>
        <a href="mailto:you@example.com" aria-label="Email" className="hover:opacity-80">
          <FaEnvelope />
        </a>
      </div>

      <p className="text-sm text-gray-500 mt-6">Himanshu © {`2023 - ${new Date().getFullYear()}`}</p>
    </section>
  );
};

export default Contact;
