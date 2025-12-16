import React, { useState } from "react";
import image from "../../../assets/images/villa.jpg";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
  };

  return (
    <div
      className="w-full mt-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="bg-black/60 w-full">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* TEXT SECTION */}
          <div className="text-white text-center md:text-left order-1 md:order-2">
            <h1 className="text-3xl font-bold mb-4">
              Making your home journey smooth, easy, and enjoyable.
            </h1>
            <p className="text-gray-200 max-w-md mx-auto md:mx-0">
              Our team guides you every step of the way, making your home
              journey simple and stress-free.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#100E2C] p-6 rounded-lg w-full max-w-96 mx-auto order-2 md:order-1"
          >
            <div className="text-white mb-4">
              <h1 className="text-2xl font-semibold">Get in touch</h1>
              <p className="text-sm text-gray-300 mt-1">
                We’re just a message away—let’s find your ideal space together.
              </p>
            </div>

            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mb-3 px-4 py-2 rounded bg-white"
            />

            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-3 px-4 py-2 rounded bg-white"
            />

            <input
              type="number"
              placeholder="Your phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mb-3 px-4 py-2 rounded bg-white"
            />

            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full mb-4 px-4 py-2 rounded bg-white"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className="w-full sm:w-full md:w-32 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
