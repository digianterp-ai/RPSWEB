"use client";

import { useState } from "react";

export default function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {

        setStatus("success");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

      } else {

        setStatus("error");

      }

    } catch (error) {

      setStatus("error");

    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        rows={5}
        className="w-full border p-3 rounded-lg"
        required
      />

      <button
        type="submit"
        className="bg-[#C49A3B] text-white px-8 py-3 rounded-lg hover:opacity-90"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 font-semibold">
          Message sent successfully!
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 font-semibold">
          Failed to send message. Please try again.
        </p>
      )}

    </form>
  );
}