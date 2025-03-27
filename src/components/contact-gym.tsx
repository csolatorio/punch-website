const ContactGym = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-8 max-w-6xl mx-auto">
      {/* Contact Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 p-2  rounded bg-[#EBE8DE] text-gray-800"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 p-2  rounded bg-[#EBE8DE] text-gray-800"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-[#EBE8DE] text-gray-800"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 rounded bg-[#EBE8DE] text-gray-800 h-24"
          />
          <button className="px-6 py-3 bg-black text-white rounded shadow-lg">
            Send
          </button>
        </form>
      </div>

      {/* Gym Location */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
        <h2 className="text-2xl font-bold mb-4">
          Visit Our Gym in{" "}
          <span className="font-extrabold">Causeway Bay, HK</span>
        </h2>
        <p className="mb-4">
          We are currently located on the{" "}
          <b>
            RY Fitness - 17/F, Sun King Building, 56 Yee Wo Street, Causeway
            Bay, Hong Kong SAR
          </b>
          , making it easy for you to experience the best boxing training Hong
          Kong has to offer.
        </p>
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
