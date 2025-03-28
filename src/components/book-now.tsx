import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const BookBoxingClass: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    classType: "Personal Training",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, date, time, classType } = form;
    const message = `Boxing Class Booking:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📅 Date: ${date}\n⏰ Time: ${time}\n📌 Class Type: ${classType}`;

    const phoneNumber = "85294338092";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="relative w-full h-screen text-white">
      <Navbar />
      <div className="max-w-xl mx-auto mb-20 p-6 bg-[#EBE8DE] shadow-xl rounded-2xl mt-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Book a Class</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block mb-1 font-medium text-black">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-black">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-black">
              Preferred Time
            </label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-black">
              Class Type
            </label>
            <select
              name="classType"
              value={form.classType}
              onChange={handleChange}
              className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="Personal Training">Personal Training</option>
              <option value="Small Group">Small Group</option>
              <option value="Corporate Classes">Corporate Classes</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
          >
            Book Now
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BookBoxingClass;
