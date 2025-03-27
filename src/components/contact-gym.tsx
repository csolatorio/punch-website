import { useState } from "react";

const ContactGym = () => {
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
    <div className="flex flex-col md:flex-row justify-between p-8 max-w-6xl mx-auto">
      {/* Contact Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="w-1/2 p-2 rounded bg-[#EBE8DE] text-gray-800"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="w-1/2 p-2 rounded bg-[#EBE8DE] text-gray-800"
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-[#EBE8DE] text-gray-800"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2 rounded bg-[#EBE8DE] text-gray-800 h-24"
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
              className="px-6 py-3 bg-green-500 text-white rounded shadow-lg"
            >
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>

      {/* Gym Location */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
        <h2 className="text-lg font-bold mb-4">
          RY Fitness - 17/F, Sun King Building, 56 Yee Wo Street, Causeway Bay,
          Hong Kong SAR
        </h2>
        <iframe
          className="w-full h-64 border rounded"
          src="https://www.google.com/maps?q=56+Yee+Wo+Street,+Causeway+Bay,+Hong+Kong+SAR&output=embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactGym;
