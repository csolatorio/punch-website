import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./navbar";
// import ImageRY from "../assets/ry-fitness.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [confirmation, setConfirmation] = useState(""); // Confirmation message state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showConfirmation = () => {
    setConfirmation("Message sent via WhatsApp! ✅");
    setTimeout(() => setConfirmation(""), 3000); // Auto-hide after 3 sec
  };

  const handleSendWhatsApp = () => {
    const { firstName, lastName, email, message } = formData;
    const whatsappMessage = encodeURIComponent(
      `Hello Punch Boxing Academy,\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.open(`https://wa.me/85294338092?text=${whatsappMessage}`, "_blank"); // Replace with your WhatsApp number
    showConfirmation();
  };

  return (
    <div className="relative w-full h-screen text-white bg-[#EAE6DC] ">
      <Navbar />

      <div className="mb-10 text-left p-4 md:p-8 max-w-6xl mx-auto">
        <h2 className="mb-10 text-3xl md:text-4xl font-bold">Contact Us</h2>
        <p className="text-gray-700 text-sm">Phone: +852 9433 8092</p>
        <p className="text-gray-700 text-sm">
          Email: info@punchboxingacademy.com
        </p>
        <p className="text-gray-700 text-sm">
          Address: RY Fitness 17/F, Sun King Building, 56 Yee Wo Street,
          Causeway Bay, Hong Kong SAR
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between p-4 md:p-8 max-w-6xl mx-auto gap-8">
        {/* Contact Form */}

        <div className="w-full lg:w-1/2">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="w-full sm:w-1/2 p-2 rounded bg-white text-gray-800"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="w-full sm:w-1/2 p-2 rounded bg-white text-gray-800"
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-white text-gray-800"
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-2 rounded bg-white text-gray-800 h-24"
              onChange={handleChange}
            />

            {/* Confirmation Message */}
            {confirmation && (
              <div className="text-green-600 font-semibold">{confirmation}</div>
            )}

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="px-6 py-3 bg-green-500 text-white rounded shadow-lg flex items-center gap-2"
              >
                Send via <FaWhatsapp className="text-xl" />
              </button>
            </div>
          </form>
        </div>

        {/* Map */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.960529717415!2d114.18341141171337!3d22.279484943563396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400fe187d75cf%3A0x1c2bf7df77309566!2zUlkgRml0bmVzc-WBpei6q-S4reW_gw!5e0!3m2!1sen!2sph!4v1743132484338!5m2!1sen!2sph"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
