import React, { useState } from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import image from "../../assets/images/villa.jpg";

function FormContact() {
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
    <div className="w-full mt-8 mb-8 px-4">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-lg">
        {/* Background Image with overlay */}
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="bg-black/60 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8 md:p-12">
              {/* TEXT SECTION */}
              <div className="text-white text-center md:text-left order-1 md:order-2 space-y-3">
                <h1 className="text-3xl font-bold mb-2">
                  Feel free to contact us
                </h1>
                <p className="text-gray-200 max-w-md mx-auto md:mx-0">
                  We’re here to help you anytime.
                </p>

                <div className="flex items-center gap-2">
                  <HiLocationMarker className="text-blue-500" />
                  <span>Cart-e-Char, 3rd Street, Kabul, Afghanistan</span>
                </div>

                <div className="flex items-center gap-2">
                  <HiPhone className="text-blue-500" />
                  <span>+93 87 140 4483</span>
                </div>

                <div className="flex items-center gap-2">
                  <HiMail className="text-blue-500" />
                  <span>irfankhanahmadzai044@gmail.com</span>
                </div>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="bg-[#100E2C] p-6 rounded-2xl w-full max-w-96 mx-auto order-2 md:order-1 space-y-3"
              >
                <div className="text-white mb-4">
                  <h1 className="text-2xl font-semibold">Get in touch</h1>
                  <p className="text-sm text-gray-300 mt-1">
                    We’re just a message away—let’s find your ideal space
                    together.
                  </p>
                </div>

                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-white"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-white"
                />

                <input
                  type="number"
                  placeholder="Your phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-white"
                />

                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded bg-white"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full md:w-32 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition disabled:opacity-50"
                >
                  {isSending ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormContact;
