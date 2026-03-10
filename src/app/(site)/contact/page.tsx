"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import SuccessModal from "@/components/ui/SuccessModal";
import FloatingInput from "@/components/ui/FloatingInput";
import FloatingTextarea from "@/components/ui/FloatingTextarea";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {

      setSuccessOpen(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <>
      {/* SUCCESS MODAL */}

      <SuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
      />


      {/* HERO */}

      <section className="relative w-full min-h-[50vh] flex items-center justify-center text-white overflow-hidden sitepage-banner mb-10">

        <div className="relative z-10 text-center px-8">

          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-6">
            Contact & Enquiries
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            We're Here to Help You Connect.
          </h1>

          <div className="w-24 h-0.75 bg-[#C49A3B] mx-auto"></div>

        </div>

      </section>


      {/* CONTACT INFO */}

      <div className="max-w-6xl mx-auto px-6 lg:px-20 mb-20">

        <div className="grid md:grid-cols-3 gap-10 text-center">


          {/* ADDRESS */}

          <div className="bg-[#F8FAFC] p-8 rounded-xl shadow-sm">

            <div className="flex justify-center mb-4">
              <MapPin className="text-[#C49A3B]" size={32} />
            </div>

            <h3 className="font-semibold text-lg mb-3 text-[#0B1F3A]">
              School Address
            </h3>

            <p className="text-gray-600">
              Royal Public School <br />
              Deori, District Sagar <br />
              Madhya Pradesh, India
            </p>

          </div>


          {/* PHONE */}

          <div className="bg-[#F8FAFC] p-8 rounded-xl shadow-sm">

            <div className="flex justify-center mb-4">
              <Phone className="text-[#C49A3B]" size={32} />
            </div>

            <h3 className="font-semibold text-lg mb-3 text-[#0B1F3A]">
              Phone
            </h3>

            <p className="text-gray-600">
              +91 79873 14617 <br />
              +91 99813 06699
            </p>

          </div>


          {/* EMAIL */}

          <div className="bg-[#F8FAFC] p-8 rounded-xl shadow-sm">

            <div className="flex justify-center mb-4">
              <Mail className="text-[#C49A3B]" size={32} />
            </div>

            <h3 className="font-semibold text-lg mb-3 text-[#0B1F3A]">
              Email
            </h3>

            <p className="text-gray-600">
              info@rpsdeori.org
            </p>

          </div>

        </div>

      </div>


      {/* CONTACT FORM */}

      <section className="w-full bg-[#F8FAFC] py-24">

        <div className="max-w-6xl mx-auto px-6 lg:px-20">

          <div className="grid md:grid-cols-2 gap-16">


            {/* LEFT SIDE */}

            <div>

              <h2 className="text-3xl font-bold mb-6 text-[#0B1F3A]">
                Send Us a Message
              </h2>

              <p className="text-gray-600 mb-8">
                If you have any questions regarding admissions,
                academics, or facilities, feel free to contact us.
                Our team will respond promptly.
              </p>

              <p className="text-gray-700">
                <strong>Office Hours:</strong>
                <br />
                Monday – Saturday
                <br />
                8:30 AM – 3:00 PM
              </p>

            </div>


            {/* FORM */}

            <form onSubmit={handleSubmit} className="space-y-6">

              <FloatingInput
                name="name"
                value={form.name}
                onChange={handleChange}
                label="Your Name"
                required
              />

              <FloatingInput
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                label="Email Address"
                required
              />

              <FloatingInput
                name="phone"
                value={form.phone}
                onChange={handleChange}
                label="Phone Number"
              />

              <FloatingTextarea
                name="message"
                value={form.message}
                onChange={handleChange}
                label="Your Message"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  bg-[#0B1F3A]
                  text-white
                  px-6 py-3
                  rounded-lg
                  hover:bg-[#C49A3B]
                  transition
                  shadow
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* GOOGLE MAP */}

      <section className="w-full h-112.5">

        <iframe
          src="https://www.google.com/maps?q=Deori,Sagar,Madhya%20Pradesh&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
        ></iframe>

      </section>

    </>
  );
}